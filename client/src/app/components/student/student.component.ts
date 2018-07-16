import { Component, OnInit } from '@angular/core';
import {StudentService} from '../../services/student.service';
import {Student} from '../../../Student';
import {TokenStorage} from '../../token.storage';
import {Router} from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students: Student[];

  student: Student = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    address: {
      id: 0,
      street: '',
      state: '',
      zipCode: ''
    },
    course: {
      id: 0,
      name: ''
    }

  };

  filteredBy = '';

  showAddStudent = false;

  doEditStudent = false;


  constructor(private studentService: StudentService, private tokenStorage: TokenStorage, private router: Router) {

    this.studentService.getStudents().subscribe(students => {
      this.students = students;
    });

  }

  ngOnInit() {
  }


  showAddStudentForm() {
    this.showAddStudent = !this.showAddStudent;
    this.student = {
      id: 0,
      firstName: '',
      lastName: '',
      email: '',
      address: {
        id: 0,
        street: '',
        state: '',
        zipCode: ''
      },
      course: {
        id: 0,
        name: ''
      }

    };

  }

  addStudent() {
    this.studentService.addStudent(this.student).subscribe(student => {
      this.students.unshift(this.student);
    });
    this.showAddStudent = !this.showAddStudent;
  }

  deleteStudent(id) {

    this.studentService.deleteStudent(id).subscribe(res => {

      for (let i = 0; i < this.students.length; i++) {

        if (this.students[i].id === id) {
          this.students.splice(i, 1);
        }

      }
    });

  }

  showEditStudent(student) {
    this.doEditStudent = !this.doEditStudent;
    this.student = student;
  }

  editStudent(student) {

    if (this.doEditStudent) {
      this.studentService.updateStudent(this.student).subscribe(student => {
        for (let i = 0; i < this.students.length; i++) {

          if (this.students[i].id === this.student.id) {
            this.students.splice(i, 1);
          }

        }
        this.students.unshift(this.student);
      });
    } else {
      this.studentService.addStudent(this.student).subscribe(student => {
        console.log(student);
        this.students.unshift(this.student);
      });
    }
    this.doEditStudent = !this.doEditStudent;
  }
  logout() {
    this.tokenStorage.signOut();
    this.router.navigate(['']);
  }
}
