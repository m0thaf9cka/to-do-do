package com.demo.tododobackend.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.demo.tododobackend.model.Todo;
import com.demo.tododobackend.repository.TodoRepository;

@Service
public class TodoService {

  private static final Integer TODOS_PER_PAGE = 10;

  private final TodoRepository todoRepository;

  public TodoService(TodoRepository todoRepository) {
    this.todoRepository = todoRepository;
  }

  public Page<Todo> getList(String query, String filter, String sort, Integer page) {
    String sortBy = "id";
    if (sort.startsWith("title")) {
      sortBy = "title";
    }
    Sort sorting = Sort.by(Sort.Order.asc(sortBy).ignoreCase());
    if (sort.endsWith("desc")) {
      sorting = Sort.by(Sort.Order.desc(sortBy).ignoreCase());
    }
    PageRequest pageRequest = PageRequest.of(page - 1, TODOS_PER_PAGE, sorting);
    if (filter.equals("all")) {
      return todoRepository.findAllByTitleIgnoreCaseContains(query, pageRequest);
    }
    return todoRepository.findAllByTitleIgnoreCaseContainsAndIsCompletedIs(
        query, filter.equals("done"), pageRequest);
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
