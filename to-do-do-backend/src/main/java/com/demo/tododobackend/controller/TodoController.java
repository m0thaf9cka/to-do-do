package com.demo.tododobackend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.tododobackend.model.Todo;
import com.demo.tododobackend.service.TodoService;

@RestController
@CrossOrigin
@RequestMapping("/api/todo")
public class TodoController {

  private final TodoService todoService;

  public TodoController(TodoService todoService) {
    this.todoService = todoService;
  }

  @GetMapping("/get/all")
  public List<Todo> getAll() {
    return todoService.getAll();
  }

  @PostMapping("/add")
  public Todo add(@RequestBody Todo todo) {
    return todoService.add(todo);
  }

  @PatchMapping("/toggle/{id}")
  public void toggle(@PathVariable Long id) {
    todoService.toggle(id);
  }

  @DeleteMapping("/remove/{id}")
  public void remove(@PathVariable Long id) {
    todoService.remove(id);
  }
}
