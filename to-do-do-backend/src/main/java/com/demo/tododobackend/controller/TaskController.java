package com.demo.tododobackend.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.tododobackend.model.Task;

@RestController
@RequestMapping("/api/task")
public class TaskController {

    @GetMapping("/all")
    public List<Task> getTaskList() {
        List<Task> taskList = new ArrayList<>();
        taskList.add(new Task(1, "Buy groceries", true));
        taskList.add(new Task(2, "Clean up the apartment", false));
        taskList.add(new Task(3, "Wash the dishes", false));
        taskList.add(new Task(4, "Do morning exercises", true));
        taskList.add(new Task(5, "Make a breakfast", false));
        return taskList;
    }

}
