package pomodoroKanbanTimer;

import org.junit.jupiter.api.Test;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.ApplicationContext;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
class ApplicationTest {

	private ApplicationContext context;

	@Test
	void contextLoads() {
		// Load the application context
		context = SpringApplication.run(Application.class);

		// Verify that the application context loads without errors
		// and that the main application class is properly configured
		assertNotNull(context);
		assertTrue(context.getBean(Application.class) instanceof Application);
	}

}
