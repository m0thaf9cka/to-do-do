package com.demo.tododobackend.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.demo.tododobackend.model.Todo;

@Repository
public interface TodoRepository extends CrudRepository<Todo, Long> {

}
