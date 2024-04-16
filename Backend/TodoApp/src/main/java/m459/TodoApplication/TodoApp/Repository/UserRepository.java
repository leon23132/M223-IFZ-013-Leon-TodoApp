package m459.TodoApplication.TodoApp.Repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import m459.TodoApplication.TodoApp.Model.Users.User;

public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByUserName(String userName);
}
