package m459.TodoApplication.TodoApp.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import m459.TodoApplication.TodoApp.Model.Task;
import m459.TodoApplication.TodoApp.Services.TaskService;

@RestController
@RequestMapping("/tasks")
public class TaskController {

    private final TaskService taskService;

    @Autowired
    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping("/all")
    public List<Task> getAllTasks() {
        return taskService.getAllTasks();
    }

    @GetMapping("/filtered/{taskStatus}")
    public List<Task> getFilteredTask(@PathVariable String taskStatus) {
        return taskService.getFilteredTasks(taskStatus);
    }

    @GetMapping("/filteredDate/{taskStatus},{filterDate}")
    public List<Task> getTaskFilteredByDateAndTaskStatus(@PathVariable(required = false) String taskStatus,
            @PathVariable(required = false) String filterDate) {
        if (taskStatus == null || taskStatus.isEmpty()) {
            // Wenn taskStatus nicht angegeben ist, verwende den vorherigen Status
            taskStatus = "alle";
        }
        if (filterDate == null || filterDate.isEmpty()) {
            // Wenn filterDate nicht angegeben ist, verwende den vorherigen Filter
            filterDate = "asc"; // Oder eine andere Standardwert, falls nötig
        }
        return taskService.getFilteredDateStatus(taskStatus, filterDate);
    }

    @DeleteMapping("/delete/{taskId}")
    public void deleteTask(@PathVariable int taskId) {
        taskService.deleteTask(taskId);
    }

    @PutMapping("/update/{taskId}")
    public void updateTask(@PathVariable int taskId,
            @RequestBody Task task) {
        taskService.updateTask(taskId, task);
    }

    @PostMapping("/add")
    public ResponseEntity<String> addTask(@RequestBody Task task) {
        taskService.addTask(task);
        return ResponseEntity.ok("Task added successfully");
    }

}