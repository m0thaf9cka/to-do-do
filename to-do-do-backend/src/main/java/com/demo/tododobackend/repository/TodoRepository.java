package com.demo.tododobackend.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.demo.tododobackend.model.Todo;

@Repository
public interface TodoRepository extends PagingAndSortingRepository<Todo, Long> {

  Page<Todo> findAllByTitleIgnoreCaseContains(String title, Pageable pageable);

  Page<Todo> findAllByTitleIgnoreCaseContainsAndIsCompleteIs(
      String title, Boolean isComplete, Pageable pageable);

  Iterable<Todo> findAllByIsCompleteIsTrue();
}
