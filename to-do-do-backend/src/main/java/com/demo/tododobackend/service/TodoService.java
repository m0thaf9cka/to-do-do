package com.demo.tododobackend.service;

import java.time.LocalDateTime;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.demo.tododobackend.constants.TodoConstants;
import com.demo.tododobackend.model.Todo;
import com.demo.tododobackend.repository.TodoRepository;

@Service
public class TodoService {

  private final TodoRepository todoRepository;

  public TodoService(TodoRepository todoRepository) {
    this.todoRepository = todoRepository;
  }

  public Page<Todo> getList(String query, String filter, String sort, Integer page) {
    return filter.equals(TodoConstants.FILTER_ALL)
        ? todoRepository.findAllByTitleIgnoreCaseContains(query, getPageRequest(page, sort))
        : todoRepository.findAllByTitleIgnoreCaseContainsAndIsCompleteIs(
            query, filter.equals(TodoConstants.FILTER_COMPLETE), getPageRequest(page, sort));
  }

  public Todo save(Todo todo) {
    if (todo.getCreatedAt() == null) {
      todo.setCreatedAt(LocalDateTime.now());
    }
    return todoRepository.save(todo);
  }

  public void toggle(Long id) {
    todoRepository
        .findById(id)
        .ifPresent(
            todo -> {
              todo.setIsComplete(!todo.getIsComplete());
              todoRepository.save(todo);
            });
  }

  public void remove(Long id) {
    todoRepository.deleteById(id);
  }

  public void clearList() {
    todoRepository.deleteAll(todoRepository.findAllByIsCompleteIsTrue());
  }

  private PageRequest getPageRequest(Integer page, String sort) {
    return PageRequest.of(--page, TodoConstants.TODO_ITEMS_PER_PAGE, getSort(sort));
  }

  private Sort getSort(String sort) {
    return sort.endsWith(TodoConstants.SORT_ASC)
        ? Sort.by(Sort.Order.asc(getSortBy(sort)).ignoreCase())
        : Sort.by(Sort.Order.desc(getSortBy(sort)).ignoreCase());
  }

  private String getSortBy(String sort) {
    return sort.startsWith(TodoConstants.SORT_CREATED_AT)
        ? TodoConstants.SORT_CREATED_AT
        : TodoConstants.SORT_TITLE;
  }
}
