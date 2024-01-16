package com.crud.fullstackbackend.model;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class User {

    @Id
   @GeneratedValue
    private int id;
    private String name;
    private String description;
    private String assigned_by;
    private String assigned_for;
    private String assign_date;
    private String deadline;
    private String status;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAssigned_by() {
        return assigned_by;
    }

    public void setAssigned_by(String assigned_by) {
        this.assigned_by = assigned_by;
    }

    public String getAssigned_for() {
        return assigned_for;
    }

    public void setAssigned_for(String assigned_for) {
        this.assigned_for = assigned_for;
    }

    public String getAssign_date() {
        return assign_date;
    }

    public void setAssign_date(String assign_date) {
        this.assign_date = assign_date;
    }

    public String getDeadline() {
        return deadline;
    }

    public void setDeadline(String deadline) {
        this.deadline = deadline;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public User() {
    }

    public User(int id, String name, String description, String assigned_by, String assigned_for, String assign_date, String deadline, String status) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.assigned_by = assigned_by;
        this.assigned_for = assigned_for;
        this.assign_date = assign_date;
        this.deadline = deadline;
        this.status = status;
    }
}
