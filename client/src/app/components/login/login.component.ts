import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {TokenStorage} from '../../token.storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  message = '';

  constructor(private router: Router, private authService: AuthService, private token: TokenStorage) {
  }

  username: string;
  password: string;

  login(): void {

    this.authService.attemptAuth(this.username, this.password).subscribe(
      data => {
        this.token.saveToken(data.token);
        this.router.navigate(['students']);
      }
    );
		 this.message = 'Invalid Credentials!';
  }
}
