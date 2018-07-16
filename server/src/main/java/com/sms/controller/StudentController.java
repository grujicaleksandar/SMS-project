package com.sms.controller;

import com.sms.model.Student;
import com.sms.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.Resource;
import org.springframework.hateoas.mvc.ControllerLinkBuilder;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.methodOn;

@RestController
public class StudentController {

    @Autowired
    private StudentService studentService;

    @GetMapping("/students")
    public List<Student> getAll() {
        List<Student> students = studentService.getAll();
        return students;
    }

    @GetMapping("/students/{id}")
    public ResponseEntity<Resource<Student>> getStudentById(@PathVariable int id) {

        Student p = studentService.getStudentById(id);

        Resource<Student> resource = new Resource<Student>(p);

        ControllerLinkBuilder linkToPerson = linkTo(methodOn(this.getClass()).getStudentById(id));
        ControllerLinkBuilder linkToPersons = linkTo(methodOn(this.getClass()).getAll());

        resource.add(linkToPerson.withRel("self"));
        resource.add(linkToPersons.withRel("all"));

        if (p != null)
            return new ResponseEntity(resource, HttpStatus.OK);
        else
            return new ResponseEntity(HttpStatus.NOT_FOUND);

    }

    @PostMapping("/students")
    public ResponseEntity<Object> saveStudent(@RequestBody Student student) {

        return new ResponseEntity<>(studentService.saveStudent(student), HttpStatus.CREATED);

    }

    @PutMapping("/students/{id}")
    public Student updateStudent(@PathVariable int id, @RequestBody Student student) {

       Student s = studentService.getStudentById(id);

        s.setFirstName(student.getFirstName());
        s.setLastName(student.getLastName());
        s.setEmail(student.getEmail());
        studentService.updateStudent(student);

        return student;

    }

    @DeleteMapping("/students/{id}")
    public ResponseEntity<Object> deleteStudentById(@PathVariable int id) {

        return new ResponseEntity<>(studentService.deleteStudentById(id), HttpStatus.NO_CONTENT);

    }


}
