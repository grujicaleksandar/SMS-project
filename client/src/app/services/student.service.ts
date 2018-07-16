import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getStudents(): Observable<any> {
    return this.http.get('http://localhost:8080/students');

  }
  addStudent(student) {
    return this.http.post('http://localhost:8080/students', student);
  }
  deleteStudent(id) {
    return this.http.delete('http://localhost:8080/students/' + id);
  }

  updateStudent(student) {
    return this.http.put('http://localhost:8080/students/' + student.id, student);

  }
}
