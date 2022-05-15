package com.demo.tododobackend.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.demo.tododobackend.model.Todo;
import com.demo.tododobackend.repository.TodoRepository;

@Service
public class TodoService {

  private static final Integer TODOS_PER_PAGE = 5;
  private final TodoRepository todoRepository;

  public TodoService(TodoRepository todoRepository) {
    this.todoRepository = todoRepository;
  }

  public Page<Todo> getList(String query, Integer page) {
    if (query != null) {
      return todoRepository.findAllByTitleIgnoreCaseContains(
          query, PageRequest.of(page - 1, TODOS_PER_PAGE));
    }
    return todoRepository.findAll(PageRequest.of(page - 1, TODOS_PER_PAGE));
  }

  public Todo save(Todo todo) {
    return todoRepository.save(todo);
  }

  public void toggle(Long id) {
    todoRepository
        .findById(id)
        .ifPresent(
            todo -> {
              todo.setIsCompleted(!todo.getIsCompleted());
              todoRepository.save(todo);
            });
  }

  public void remove(Long id) {
    todoRepository.deleteById(id);
  }
}
