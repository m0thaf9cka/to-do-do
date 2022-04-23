package com.demo.tododobackend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.demo.tododobackend.model.Task;
import com.demo.tododobackend.repository.TaskRepository;

@Service
public class TaskService {

    private final TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public List<Task> getAll() {
        return (List<Task>) taskRepository.findAll();
    }

    public void create(String title, Boolean isCompleted) {
        Task task = Task.builder()
                .title(title)
                .isCompleted(isCompleted)
                .build();
        taskRepository.save(task);
    }

}
