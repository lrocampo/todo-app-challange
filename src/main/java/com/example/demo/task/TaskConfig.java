package com.example.demo.task;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class TaskConfig {

    @Bean
    CommandLineRunner commandLineRunner(TaskRepository repository) {
        return args -> {
                Task makeDinner = new Task (
                        "Make dinner",
                        false
                );
                Task sleepAt5 = new Task (
                        "Sleep At 5",
                        true
                );
                repository.saveAll(List.of(makeDinner, sleepAt5));
        };
    }
}
