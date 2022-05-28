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
    todoService.save(Todo.builder().title("Buy groceries").isComplete(true).build());
    todoService.save(Todo.builder().title("Clean up the apartment").isComplete(false).build());
    todoService.save(Todo.builder().title("Wash the dishes").isComplete(false).build());
    todoService.save(Todo.builder().title("Do morning exercises").isComplete(true).build());
    todoService.save(Todo.builder().title("Make a breakfast").isComplete(false).build());
    todoService.save(Todo.builder().title("Read the newspaper").isComplete(false).build());
    todoService.save(Todo.builder().title("Take a shower").isComplete(true).build());
    todoService.save(Todo.builder().title("Change the hairstyle").isComplete(true).build());
    todoService.save(Todo.builder().title("Pick up kids from school").isComplete(false).build());
    todoService.save(Todo.builder().title("Walk the dog").isComplete(true).build());
    todoService.save(Todo.builder().title("Pay the bills").isComplete(true).build());
    todoService.save(Todo.builder().title("Have dinner with parents").isComplete(false).build());
    todoService.save(Todo.builder().title("Do laundry").isComplete(true).build());
    todoService.save(Todo.builder().title("Play board games").isComplete(false).build());
    todoService.save(Todo.builder().title("Go to church").isComplete(false).build());
  }
}
