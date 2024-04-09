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

    @Transactional
    public void deleteTask(int taskId) {
        taskRepository.deleteByTaskid(taskId);
    }

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

    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    @Transactional
    public List<Task> getFilteredTasks(String taskStatus) {
        return taskRepository.findByTaskStatus(taskStatus);
    }

    @Transactional
    public void addTask(Task task) {
        taskRepository.save(task);
    }

    public List<Task> getFilteredDateStatus(String taskStatus, String datefilter) {
        // Überprüfen, ob taskStatus "alle" ist oder nicht angegeben wurde
        if (taskStatus == null || "alle".equalsIgnoreCase(taskStatus)) {
            // Überprüfen, ob datefilter "asc" oder "desc" ist oder nicht angegeben wurde
            if ("asc".equals(datefilter)) {
                return taskRepository.findAllByOrderByTaskDateAsc();
            } else if ("desc".equals(datefilter)) {
                return taskRepository.findAllByOrderByTaskDateDesc();
            } else {
                // datefilter ist nicht angegeben oder leer, gib einfach alle Aufgaben zurück
                return taskRepository.findAll();
            }
        } else {
            // Überprüfen, ob datefilter "asc" oder "desc" ist oder nicht angegeben wurde
            if ("asc".equals(datefilter)) {
                return taskRepository.findByTaskStatusOrderByTaskDateAsc(taskStatus);
            } else if ("desc".equals(datefilter)) {
                return taskRepository.findByTaskStatusOrderByTaskDateDesc(taskStatus);
            } else {
                // datefilter ist nicht angegeben oder leer, gib Aufgaben mit dem angegebenen
                // taskStatus zurück
                return taskRepository.findByTaskStatus(taskStatus);
            }
        }
    }

}
