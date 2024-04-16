package m459.TodoApplication.TodoApp.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.google.common.base.Optional;

import m459.TodoApplication.TodoApp.Model.Users.URole;

@Repository
public interface RoleRepository extends JpaRepository<URole, Integer> {
    Optional<URole> findByRole(String roleName);
}
