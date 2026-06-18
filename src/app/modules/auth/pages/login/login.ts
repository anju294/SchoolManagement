import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule,
    ButtonModule,
    InputTextModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  userName = '';
  password = '';

  login() {


    localStorage.setItem(
      'token',
      'dummy-token'
    );

    localStorage.setItem(
      'role',
      'Admin'
    );

    this.router.navigate(['/students']);

    // const payload = {
    //   userName: this.userName,
    //   password: this.password
    // };

    // console.log(payload);
    // this.authService.login(payload)
    //   .subscribe(response => {

    //     this.authService.saveUser(response);

    //     switch (response.role) {

    //       case 'Admin':
    //         this.router.navigate(['/admin/dashboard']);
    //         break;

    //       case 'Teacher':
    //         this.router.navigate(['/teacher/dashboard']);
    //         break;

    //       case 'Student':
    //         this.router.navigate(['/student/dashboard']);
    //         break;
    //     }

    //   });
  }
}
