/**
 * Login page component
 *
 * @version  0.1.1
 * @url
 *
 * Copyright Md Saeed Sharman.
 * Licensed under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 */

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.logOut();
  }

  logIn() {
    console.log(this.email);
    console.log(this.password);
    this.authService
      .signInWithEmailAndPassword(this.email, this.password)
      .then(() => {
        this.router.navigate(['home']);
      })
      .catch((err) => {
        alert(err);
      });
  }
}
