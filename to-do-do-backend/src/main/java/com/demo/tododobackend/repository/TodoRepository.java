package com.demo.tododobackend.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.demo.tododobackend.model.Todo;

@Repository
public interface TodoRepository extends PagingAndSortingRepository<Todo, Long> {

  Page<Todo> findAll(Pageable pageable);

  Page<Todo> findAllByIsCompletedIsFalse(Pageable pageable);

  Page<Todo> findAllByIsCompletedIsTrue(Pageable pageable);

  Page<Todo> findAllByTitleIgnoreCaseContains(String title, Pageable pageable);

  Page<Todo> findAllByTitleIgnoreCaseContainsAndIsCompletedIsFalse(String title, Pageable pageable);

  Page<Todo> findAllByTitleIgnoreCaseContainsAndIsCompletedIsTrue(String title, Pageable pageable);
}
