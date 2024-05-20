package m459.TodoApplication.TodoApp.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import m459.TodoApplication.TodoApp.Model.Task;
import m459.TodoApplication.TodoApp.Services.TaskService;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/tasks")
public class TaskController {

    private final TaskService taskService;

    @Autowired
    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    // Endpoint to retrieve all tasks
    @GetMapping("/all")
    public List<Task> getAllTasks() {
        return taskService.getAllTasks();
    }

    // Endpoint to retrieve filtered tasks by task status
    @GetMapping("/filtered/{taskStatus}")
    public List<Task> getFilteredTask(@PathVariable String taskStatus) {
        return taskService.getFilteredTasks(taskStatus);
    }

    // Endpoint to retrieve tasks filtered by both task status and date
    @GetMapping("/filteredDate/{taskStatus},{filterDate}")
    public List<Task> getTaskFilteredByDateAndTaskStatus(@PathVariable(required = false) String taskStatus,
            @PathVariable(required = false) String filterDate) {
        if (taskStatus == null || taskStatus.isEmpty()) {
            // If taskStatus is not provided, use the previous status
            taskStatus = "all";
        }
        if (filterDate == null || filterDate.isEmpty()) {
            // If filterDate is not provided, use the previous filter
            filterDate = "asc"; // Or any other default value if needed
        }
        return taskService.getFilteredDateStatus(taskStatus, filterDate);
    }

    // Endpoint to delete a task by ID
    @DeleteMapping("/delete/{taskId}")
    public void deleteTask(@PathVariable int taskId) {
        taskService.deleteTask(taskId);
    }

    // Endpoint to update a task by ID
    @PutMapping("/update/{taskId}")
    public void updateTask(@PathVariable int taskId,
            @RequestBody Task task) {
        taskService.updateTask(taskId, task);
    }

    // Endpoint to add a new task
    @PostMapping("/add")
    public ResponseEntity<String> addTask(@RequestBody Task task) {
        taskService.addTask(task);
        return ResponseEntity.ok("Task added successfully");
    }

}