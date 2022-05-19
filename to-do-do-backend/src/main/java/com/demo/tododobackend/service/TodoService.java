package com.demo.tododobackend.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.demo.tododobackend.model.Todo;
import com.demo.tododobackend.repository.TodoRepository;

@Service
public class TodoService {

  private static final Integer TODOS_PER_PAGE = 5;
  private static final String FILTER_ACTIVE = "active";
  private static final String FILTER_DONE = "done";

  private final TodoRepository todoRepository;

  public TodoService(TodoRepository todoRepository) {
    this.todoRepository = todoRepository;
  }

  public Page<Todo> getList(String query, String filter, Integer page) {
    if (query != null) {
      if (filter != null) {
        if (filter.equals(FILTER_ACTIVE)) {
          return todoRepository.findAllByTitleIgnoreCaseContainsAndIsCompletedIsFalse(
              query, PageRequest.of(page - 1, TODOS_PER_PAGE));
        }
        if (filter.equals(FILTER_DONE)) {
          return todoRepository.findAllByTitleIgnoreCaseContainsAndIsCompletedIsTrue(
              query, PageRequest.of(page - 1, TODOS_PER_PAGE));
        }
      }
      return todoRepository.findAllByTitleIgnoreCaseContains(
          query, PageRequest.of(page - 1, TODOS_PER_PAGE));
    }
    if (filter != null) {
      if (filter.equals(FILTER_ACTIVE)) {
        return todoRepository.findAllByIsCompletedIsFalse(PageRequest.of(page - 1, TODOS_PER_PAGE));
      }
      if (filter.equals(FILTER_DONE)) {
        return todoRepository.findAllByIsCompletedIsTrue(PageRequest.of(page - 1, TODOS_PER_PAGE));
      }
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
