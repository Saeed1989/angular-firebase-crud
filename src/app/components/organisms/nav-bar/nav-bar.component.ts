/**
 * Navbar component
 *
 * @version  1.0.0
 * @url https://github.com/Saeed1989/Breaking-news-app-admin-panel
 *
 * Copyright Md Saeed Sharman.
 * Licensed under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 */

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavbarComponent implements OnInit {
  /** flag for user log in status */
  @Input() isLoggedIn: boolean;

  ngOnInit(): void {
    console.log('app initialised');
  }
}
