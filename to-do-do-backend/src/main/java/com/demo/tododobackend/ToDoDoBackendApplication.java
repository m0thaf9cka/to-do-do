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
    todoService.save(Todo.builder().title("Buy groceries").isCompleted(true).build());
    todoService.save(Todo.builder().title("Clean up the apartment").isCompleted(false).build());
    todoService.save(Todo.builder().title("Wash the dishes").isCompleted(false).build());
    todoService.save(Todo.builder().title("Do morning exercises").isCompleted(true).build());
    todoService.save(Todo.builder().title("Make a breakfast").isCompleted(false).build());
    todoService.save(Todo.builder().title("Read the newspaper").isCompleted(false).build());
    todoService.save(Todo.builder().title("Take a shower").isCompleted(true).build());
    todoService.save(Todo.builder().title("Change the hairstyle").isCompleted(true).build());
    todoService.save(Todo.builder().title("Pick up kids from school").isCompleted(false).build());
    todoService.save(Todo.builder().title("Walk the dog").isCompleted(true).build());
    todoService.save(Todo.builder().title("Pay the bills").isCompleted(true).build());
    todoService.save(Todo.builder().title("Have dinner with parents").isCompleted(false).build());
    todoService.save(Todo.builder().title("Do laundry").isCompleted(true).build());
    todoService.save(Todo.builder().title("Play board games").isCompleted(false).build());
    todoService.save(Todo.builder().title("Go to church").isCompleted(false).build());
  }
}
