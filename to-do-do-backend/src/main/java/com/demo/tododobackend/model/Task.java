package com.demo.tododobackend.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Task {

    @JsonProperty("id")
    private long id;
    @JsonProperty("title")
    private String title;
    @JsonProperty("isCompleted")
    private boolean isCompleted;

}
