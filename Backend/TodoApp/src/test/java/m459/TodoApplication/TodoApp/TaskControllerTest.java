package m459.TodoApplication.TodoApp;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.http.ResponseEntity;

import m459.TodoApplication.TodoApp.Controller.TaskController;
import m459.TodoApplication.TodoApp.Model.Task;
import m459.TodoApplication.TodoApp.Services.TaskService;

public class TaskControllerTest {

    private TaskController taskController;
    private TaskService taskServiceMock;

    @BeforeEach
    public void setUp() {
        taskServiceMock = mock(TaskService.class);
        taskController = new TaskController(taskServiceMock);
    }

    @Test
    public void testGetAllTasks() {
        // Mocking service response
        List<Task> tasks = new ArrayList<>();
        Task task1 = new Task();
        task1.setTaskid(1);
        task1.setTaskName("Task 1");
        task1.setTaskDescription("Description 1");
        tasks.add(task1);

        Task task2 = new Task();
        task2.setTaskid(2);
        task2.setTaskName("Task 2");
        task2.setTaskDescription("Description 2");
        tasks.add(task2);

        when(taskServiceMock.getAllTasks()).thenReturn(tasks);

        // Calling controller method
        List<Task> result = taskController.getAllTasks();

        // Verifying controller behavior
        assertEquals(tasks.size(), result.size());
        assertEquals(tasks.get(0).getTaskName(), result.get(0).getTaskName());
        assertEquals(tasks.get(1).getTaskName(), result.get(1).getTaskName());
        verify(taskServiceMock, times(1)).getAllTasks();
    }

    @Test
    public void testDeleteTask() {
        int taskId = 1;

        // Calling controller method
        taskController.deleteTask(taskId);

        // Verifying controller behavior
        verify(taskServiceMock, times(1)).deleteTask(taskId);
    }

    @Test
    public void testUpdateTask() {
        int taskId = 1;
        Task task = new Task();
        task.setTaskid(taskId);
        task.setTaskName("Updated Task");
        task.setTaskDescription("Updated Description");

        // Calling controller method
        taskController.updateTask(taskId, task);

        // Verifying controller behavior
        verify(taskServiceMock, times(1)).updateTask(taskId, task);
    }

    @Test
    public void testAddTask() {
        Task task = new Task();
        task.setTaskid(1);
        task.setTaskName("New Task");
        task.setTaskDescription("New Description");

        // Calling controller method
        ResponseEntity<String> response = taskController.addTask(task);

        // Verifying controller behavior
        verify(taskServiceMock, times(1)).addTask(task);
        assertEquals("Task added successfully", response.getBody());
    }

    @Test
    public void testGetTaskFilteredByDateAndTaskStatus() {
        // Mocking service response
        List<Task> tasks = new ArrayList<>();
        Task task1 = new Task();
        task1.setTaskid(1);
        task1.setTaskName("Task 1");
        task1.setTaskDescription("Description 1");
        tasks.add(task1);

        Task task2 = new Task();
        task2.setTaskid(2);
        task2.setTaskName("Task 2");
        task2.setTaskDescription("Description 2");
        tasks.add(task2);

        // Mocking controller method parameters
        String taskStatus = "In Bearbeitung";
        String filterDate = "asc";

        // Mocking service method behavior
        when(taskServiceMock.getFilteredDateStatus(taskStatus, filterDate)).thenReturn(tasks);

        // Calling controller method
        List<Task> result = taskController.getTaskFilteredByDateAndTaskStatus(taskStatus, filterDate);

        // Verifying controller behavior
        assertEquals(tasks.size(), result.size());
        assertEquals(tasks.get(0).getTaskName(), result.get(0).getTaskName());
        assertEquals(tasks.get(1).getTaskName(), result.get(1).getTaskName());
        verify(taskServiceMock, times(1)).getFilteredDateStatus(taskStatus, filterDate);
    }
}
