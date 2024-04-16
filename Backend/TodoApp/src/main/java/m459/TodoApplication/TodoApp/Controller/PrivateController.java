package m459.TodoApplication.TodoApp.Controller;

import org.springframework.http.ResponseEntity;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

@Controller
public class PrivateController {

    @GetMapping("/private")
    public ResponseEntity<String> getGreeting() {
        String user = "";
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth.isAuthenticated()) {
            user = auth.getName();
        }
        return ResponseEntity.ok("Private content for user: " + user);
    }

}
