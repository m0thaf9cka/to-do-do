package com.demo.tododobackend;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.demo.tododobackend.service.TaskService;

@SpringBootApplication
public class ToDoDoBackendApplication implements CommandLineRunner {

	private final TaskService taskService;

	public ToDoDoBackendApplication(TaskService taskService) {
		this.taskService = taskService;
	}

	public static void main(String[] args) {
		SpringApplication.run(ToDoDoBackendApplication.class, args);
	}

	@Override
	public void run(String... args) {
		taskService.create("Buy groceries", true);
		taskService.create("Clean up the apartment", false);
		taskService.create("Wash the dishes", false);
		taskService.create("Do morning exercises", true);
		taskService.create("Make a breakfast", false);
	}

}
