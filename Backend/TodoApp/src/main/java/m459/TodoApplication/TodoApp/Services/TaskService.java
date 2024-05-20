package m459.TodoApplication.TodoApp.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import m459.TodoApplication.TodoApp.Model.Task;
import m459.TodoApplication.TodoApp.Repository.TaskRepository;

import java.util.List;

@Service
public class TaskService {

    private final TaskRepository taskRepository;

    @Autowired
    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    // Method to delete a task by its ID
    @Transactional
    public void deleteTask(int taskId) {
        taskRepository.deleteByTaskid(taskId);
    }

    // Method to update a task by its ID
    @Transactional
    public void updateTask(int taskId, Task updatedTask) {
        Task task = taskRepository.findByTaskid(taskId);
        if (task != null) {
            task.setTaskName(updatedTask.getTaskName());
            task.setTaskDescription(updatedTask.getTaskDescription());
            task.setTaskDate(updatedTask.getTaskDate());
            task.setTaskStatus(updatedTask.getTaskStatus());
            taskRepository.save(task);
        } else {
            // Handle case where task with given taskId is not found
        }
    }

    // Method to retrieve all tasks
    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    // Method to retrieve filtered tasks by task status
    @Transactional
    public List<Task> getFilteredTasks(String taskStatus) {
        return taskRepository.findByTaskStatus(taskStatus);
    }

    // Method to add a new task
    @Transactional
    public void addTask(Task task) {
        taskRepository.save(task);
    }

    // Method to retrieve tasks filtered by both task status and date
    public List<Task> getFilteredDateStatus(String taskStatus, String datefilter) {
        if (taskStatus == null || "all".equalsIgnoreCase(taskStatus)) {
            if ("asc".equals(datefilter)) {
                return taskRepository.findAllByOrderByTaskDateAsc();
            } else if ("desc".equals(datefilter)) {
                return taskRepository.findAllByOrderByTaskDateDesc();
            } else {
                return taskRepository.findAll();
            }
        } else {
            if ("asc".equals(datefilter)) {
                return taskRepository.findByTaskStatusOrderByTaskDateAsc(taskStatus);
            } else if ("desc".equals(datefilter)) {
                return taskRepository.findByTaskStatusOrderByTaskDateDesc(taskStatus);
            } else {
                return taskRepository.findByTaskStatus(taskStatus);
            }
        }
    }

}