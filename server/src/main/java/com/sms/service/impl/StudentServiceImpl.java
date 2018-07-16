package com.sms.service.impl;

import com.sms.dao.StudentDao;
import com.sms.model.Student;
import com.sms.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentDao studentDao;

    @Override
    public List<Student> getAll() {
        return (List<Student>) studentDao.findAll();
    }

    @Override
    public Student getStudentById(int id) {

        Student student = studentDao.findOne(id);

        return student;
    }

    @Override
    public Student saveStudent(Student s) {
        return studentDao.save(s);
    }

    @Override
    public Student updateStudent(Student s) {

        return studentDao.save(s);

    }

    @Override
    public Student deleteStudentById(int id) {

        Student student = studentDao.findOne(id);

        studentDao.delete(student);

        return student;

    }
}
