package com.demo.tododobackend.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.demo.tododobackend.model.Task;

@Repository
public interface TaskRepository extends CrudRepository<Task, Long> {

}
