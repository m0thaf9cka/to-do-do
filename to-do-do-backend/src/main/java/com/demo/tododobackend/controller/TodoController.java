package com.demo.tododobackend.controller;

import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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

  @GetMapping("/list")
  public Page<Todo> getList(
      @RequestParam String query,
      @RequestParam String filter,
      @RequestParam String sort,
      @RequestParam Integer page) {
    return todoService.getList(query, filter, sort, page);
  }

  @PostMapping("/save")
  public Todo save(@RequestBody Todo todo) {
    return todoService.save(todo);
  }

  @PatchMapping("/toggle/{id}")
  public void toggle(@PathVariable Long id) {
    todoService.toggle(id);
  }

  @DeleteMapping("/remove/{id}")
  public void remove(@PathVariable Long id) {
    todoService.remove(id);
  }

  @DeleteMapping("/clear")
  public void clearAll() {
    todoService.clearAll();
  }
}
