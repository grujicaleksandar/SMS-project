import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: 'http://localhost:8080/email2sms/';

  constructor(private http: HttpClient) {
  }

  attemptAuth(ussername: string, password: string): Observable<any> {
    const credentials = {username: ussername, password: password};
    return this.http.post('http://localhost:8080/token/generate-token', credentials);
  }
}
