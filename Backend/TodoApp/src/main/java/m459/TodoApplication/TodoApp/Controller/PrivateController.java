package m459.TodoApplication.TodoApp.Controller;

import org.springframework.boot.autoconfigure.neo4j.Neo4jProperties.Authentication;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PrivateController {
    
    @GetMapping("/private")
    public ResponseEntity<String> getGreeting() {

   
        return ResponseEntity.ok("Private content");
    } 
    
}
