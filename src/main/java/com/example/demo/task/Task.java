package com.example.demo.task;
import javax.persistence.*;

@Entity
@Table
public class Task {
    @Id
    @SequenceGenerator(
            name="task_sequence",
            sequenceName = "task_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "task_sequence"
    )
    private Long id;
    private String description;
    private Boolean isDone;

    public Task() {
    }

    public Task(Long id, String description, Boolean isDone) {
        this.id = id;
        this.description = description;
        this.isDone = isDone;
    }

    public Task(String description, Boolean isDone) {
        this.description = description;
        this.isDone = isDone;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String desc) {
        this.description = desc;
    }

    public Boolean getDone() {
        return isDone;
    }

    public void setDone(Boolean done) {
        this.isDone = done;
    }

    @Override
    public String toString() {
        return "Task{" +
                "id=" + id +
                ", description='" + description + '\'' +
                ", isDone=" + isDone +
                '}';
    }
}
