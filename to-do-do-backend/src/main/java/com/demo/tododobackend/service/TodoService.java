package com.demo.tododobackend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.demo.tododobackend.model.Todo;
import com.demo.tododobackend.repository.TodoRepository;

@Service
public class TodoService {

  private final TodoRepository todoRepository;

  public TodoService(TodoRepository todoRepository) {
    this.todoRepository = todoRepository;
  }

  public List<Todo> getAll() {
    return (List<Todo>) todoRepository.findAll();
  }

  public void create(String title, Boolean isCompleted) {
    todoRepository.save(Todo.builder().title(title).isCompleted(isCompleted).build());
  }
}
