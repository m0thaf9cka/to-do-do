package com.demo.tododobackend;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.demo.tododobackend.model.Todo;
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
    todoService.create(Todo.builder().title("Buy groceries").isCompleted(true).build());
    todoService.create(Todo.builder().title("Clean up the apartment").isCompleted(false).build());
    todoService.create(Todo.builder().title("Wash the dishes").isCompleted(false).build());
    todoService.create(Todo.builder().title("Do morning exercises").isCompleted(true).build());
    todoService.create(Todo.builder().title("Make a breakfast").isCompleted(false).build());
  }
}
