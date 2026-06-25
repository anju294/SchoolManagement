import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {

    this.loginForm =
      this.fb.group({

        tenantCode: [
          'DEFAULT',
          Validators.required
        ],

        userName: [
          '',
          Validators.required
        ],

        password: [
          '',
          Validators.required
        ]
      });
  }

  login() {

     localStorage.setItem(
    'accessToken',
    'dummy-token'
  );

  localStorage.setItem(
    'roles',
    JSON.stringify(['SuperAdmin'])
  );

  this.router.navigate([
    '/students'
  ]);
    // if (this.loginForm.invalid) {

    //   this.loginForm.markAllAsTouched();

    //   return;
    // }
    //  this.router.navigate(
    //         ['/students']
    //       );

    // this.authService
    //   .login(this.loginForm.value)
    //   .subscribe({

    //     next: response => {

    //       this.authService
    //         .saveUser(response);

    //       this.router.navigate(
    //         ['/students']
    //       );
    //     },

    //     error: error => {

    //       console.error(error);
    //     }
    //   });
    console.log(
      this.loginForm.value
    );
  }
}