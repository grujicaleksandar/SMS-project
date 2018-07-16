package com.sms.service;

import com.sms.model.Student;

import java.util.List;

public interface StudentService {

    List<Student> getAll();

    Student getStudentById(int id);

    Student saveStudent(Student s);

    Student updateStudent(Student s);

    Student deleteStudentById(int id);

}
