package m459.TodoApplication.TodoApp;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import m459.TodoApplication.TodoApp.Model.Task;
import m459.TodoApplication.TodoApp.Repository.TaskRepository;
import m459.TodoApplication.TodoApp.Services.TaskService;

public class TaskServiceTest {

    @Mock
    private TaskRepository taskRepositoryMock;

    @InjectMocks
    private TaskService taskService;

    private ArrayList<Task> result;

    @SuppressWarnings("deprecation")
    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testGetAllTasks() {
        ArrayList<Task> taskList = new ArrayList<>();

        Task task1 = new Task();
        task1.setTaskid(1);
        task1.setTaskName("Task 1");
        task1.setTaskDescription("Description 1");
        task1.setTaskDate(new Date(System.currentTimeMillis()));
        task1.setTaskStatus("Wartend");

        Task task2 = new Task();
        task1.setTaskid(1);
        task1.setTaskName("Task 1");
        task1.setTaskDescription("Description 1");
        task1.setTaskDate(new Date(System.currentTimeMillis()));
        task1.setTaskStatus("In Bearbeitung");

        // Hinzufügen von Tasks zur taskList
        taskList.add(task1);
        taskList.add(task2);

        when(taskRepositoryMock.findAll()).thenReturn(taskList);
        result = new ArrayList<Task>(taskService.getAllTasks());

        assertEquals(2, result.size());
    }

    @Test
    public void testDeleteTask() {
        int taskId = 1;
        doNothing().when(taskRepositoryMock).deleteByTaskid(taskId);

        taskService.deleteTask(taskId);
    }

    @Test
    public void testUpdateTask() {
        int taskId = 1;
        Task updatedTask = new Task();
        updatedTask.setTaskid(taskId);
        updatedTask.setTaskName("Updated Task");
        updatedTask.setTaskDescription("Updated Description");
        updatedTask.setTaskDate(new Date(System.currentTimeMillis()));
        updatedTask.setTaskStatus("Updated");

        // Konfigurieren des Mock-Verhaltens für findById()
        when(taskRepositoryMock.findByTaskid(taskId)).thenReturn(new Task());

        // Konfigurieren des Mock-Verhaltens für save()
        when(taskRepositoryMock.save(any(Task.class))).thenAnswer(invocation -> {
            Task taskArgument = invocation.getArgument(0);
            assertEquals(updatedTask.getTaskName(), taskArgument.getTaskName());
            assertEquals(updatedTask.getTaskDescription(), taskArgument.getTaskDescription());
            assertEquals(updatedTask.getTaskDate(), taskArgument.getTaskDate());
            assertEquals(updatedTask.getTaskStatus(), taskArgument.getTaskStatus());
            return updatedTask;
        });

        // Aufrufen der zu testenden Methode
        taskService.updateTask(taskId, updatedTask);

        // Überprüfen, ob die Methode findById() des Repositories mit dem richtigen
        // taskId aufgerufen wurde
        verify(taskRepositoryMock).findByTaskid(taskId);
    }

    @Test
    public void testAddTask() {
        Task newTask = new Task();
        newTask.setTaskName("New Task");
        newTask.setTaskDescription("New Description");
        newTask.setTaskDate(new Date(System.currentTimeMillis()));
        newTask.setTaskStatus("New Status");

        // Konfigurieren des Mock-Verhaltens für das Speichern eines Tasks
        when(taskRepositoryMock.save(any(Task.class))).thenReturn(newTask);

        // Aufrufen der zu testenden Methode
        taskService.addTask(newTask);

        // Überprüfen, ob die Methode save() des Repositories mit dem neuen Task
        // aufgerufen wurde
        verify(taskRepositoryMock).save(newTask);
    }

    @Test
    public void testGetFilteredDateStatus() {
        // Mock data
        Task task1 = new Task();
        task1.setTaskid(1);
        task1.setTaskName("Task 1");
        task1.setTaskDescription("Description 1");
        task1.setTaskDate(Date.valueOf("2023-01-01"));
        task1.setTaskStatus("In Bearbeitung");

        Task task2 = new Task();
        task2.setTaskid(2);
        task2.setTaskName("Task 2");
        task2.setTaskDescription("Description 2");
        task2.setTaskDate(Date.valueOf("2023-01-02"));
        task2.setTaskStatus("Abgeschlossen");

        // Mock repository behavior
        when(taskRepositoryMock.findByTaskStatusOrderByTaskDateAsc("In Bearbeitung")).thenReturn(List.of(task1));
        when(taskRepositoryMock.findByTaskStatusOrderByTaskDateDesc("In Bearbeitung")).thenReturn(List.of(task1));
        when(taskRepositoryMock.findByTaskStatusOrderByTaskDateAsc("Abgeschlossen")).thenReturn(List.of(task2));
        when(taskRepositoryMock.findByTaskStatusOrderByTaskDateDesc("Abgeschlossen")).thenReturn(List.of(task2));
        when(taskRepositoryMock.findAllByOrderByTaskDateAsc()).thenReturn(List.of(task1, task2));
        when(taskRepositoryMock.findAllByOrderByTaskDateDesc()).thenReturn(List.of(task2, task1));
        when(taskRepositoryMock.findAll()).thenReturn(List.of(task1, task2));

        // Test cases
        List<Task> ascFilteredTasks = taskService.getFilteredDateStatus("In Bearbeitung", "asc");
        assertEquals(List.of(task1), ascFilteredTasks);

        List<Task> descFilteredTasks = taskService.getFilteredDateStatus("In Bearbeitung", "desc");
        assertEquals(List.of(task1), descFilteredTasks);

        List<Task> defaultTasks = taskService.getFilteredDateStatus(null, null);
        assertEquals(List.of(task1, task2), defaultTasks);
    }

    

}