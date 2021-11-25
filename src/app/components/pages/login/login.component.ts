/**
 * Login page component
 *
 * @version  0.1.2
 * @url https://github.com/Saeed1989/Breaking-news-app-admin-panel
 *
 * Copyright Md Saeed Sharman.
 * Licensed under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 */

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  /** account email - added in firebase */
  email = '';

  /** account password - added in firebase */
  password = '';

  /**
   * constructor
   * @param authService service for authentication
   * @param router router
   * @param loadingService loading indicator service
   */
  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingService: LoadingService
  ) {}

  /** init life cycle call back */
  ngOnInit(): void {
    this.authService.logOut();
  }

  /** process log in operation */
  logIn() {
    this.loadingService.showLoadingIndicator();
    this.authService
      .signInWithEmailAndPassword(this.email, this.password)
      .then(() => {
        this.router.navigate(['home']);
      })
      .catch((err) => {
        alert(err);
      })
      .finally(() => {
        this.loadingService.hideLoadingIndicator();
      });
  }
}
