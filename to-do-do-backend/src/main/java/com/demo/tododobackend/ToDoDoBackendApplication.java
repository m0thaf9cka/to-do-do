package com.demo.tododobackend;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.demo.tododobackend.service.TodoService;

@SpringBootApplication
public class ToDoDoBackendApplication implements CommandLineRunner {

	private final TodoService todoService;

	public ToDoDoBackendApplication(TodoService todoService) {
		this.todoService = todoService;
	}

	public static void main(String[] args) {
		SpringApplication.run(ToDoDoBackendApplication.class, args);
	}

	@Override
	public void run(String... args) {
		todoService.create("Buy groceries", true);
		todoService.create("Clean up the apartment", false);
		todoService.create("Wash the dishes", false);
		todoService.create("Do morning exercises", true);
		todoService.create("Make a breakfast", false);
	}

}
