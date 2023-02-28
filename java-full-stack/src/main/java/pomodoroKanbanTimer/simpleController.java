package pomodoroKanbanTimer;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("api/messages")
public class simpleController {

    @GetMapping("/hello")
    public String hello(){
        return  "Hello World...Welcome to our custom Pomodoro Kanban Timer!";
    }

}
