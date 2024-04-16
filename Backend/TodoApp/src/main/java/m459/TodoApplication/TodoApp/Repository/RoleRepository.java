package m459.TodoApplication.TodoApp.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import m459.TodoApplication.TodoApp.Model.Users.ERole;
import m459.TodoApplication.TodoApp.Model.Users.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
  Optional<Role> findByName(ERole name);
}
