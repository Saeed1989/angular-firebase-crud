/**
 * Root component of the app
 *
 * @version  1.0.0
 * @url
 *
 * Copyright Md Saeed Sharman.
 * Licensed under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 */

import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { LoadingService } from './services/loading/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-firebase-crud';
  isLoggedIn = false;
  isLoading = false;

  constructor(
    private authService: AuthService,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.authService.loginSubject.subscribe(
      (isLoggedIn) => (this.isLoggedIn = isLoggedIn)
    );
    this.loadingService.loadingSubject.subscribe((isLoading) => {
      this.isLoading = isLoading;
    });
  }
}
