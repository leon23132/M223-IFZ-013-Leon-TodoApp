package m459.TodoApplication.TodoApp.Repository;

import java.sql.Date;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import m459.TodoApplication.TodoApp.Model.Task;
import java.util.List;

public interface TaskRepository extends JpaRepository<Task, Integer> {
    void deleteByTaskid(int taskId);

    @Transactional
    @Modifying
    @Query("UPDATE Task t SET t.taskName = :taskName, t.taskDescription = :taskDescription, t.taskDate = :taskDate, t.taskStatus = :taskStatus WHERE t.taskid = :taskId")
    void updateTask(int taskId, String taskName, String taskDescription, Date taskDate, String taskStatus);

    Task findByTaskid(int taskId);

    List<Task> findByTaskStatus(String taskStatus);
    
    List<Task> findByTaskStatusOrderByTaskDateAsc(String taskStatus);
    List<Task> findByTaskStatusOrderByTaskDateDesc(String taskStatus);
    List<Task> findAllByOrderByTaskDateAsc();
    List<Task> findAllByOrderByTaskDateDesc();

}
