package pomodoroKanbanTimer;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("api/messages")
public class simpleController {

    // visisble at http://localhost:8080/api/messages/hello
    // if not, see what "Tomcat" initialized with in console
    @GetMapping("/hello")
    public String hello(){
        return  "Hello World...Welcome to our custom Pomodoro Kanban Timer!";
    }

}
