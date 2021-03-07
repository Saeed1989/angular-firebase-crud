/**
 * Home page component
 *
 * @version  0.1.2
 * @url https://github.com/Saeed1989/Breaking-news-app-admin-panel
 *
 * Copyright Md Saeed Sharman.
 * Licensed under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 */

import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  /** array of items */
  items: Array<any>;

  /**
   * constructor
   * @param firebaseService service for firebase cloud operation
   * @param router router
   */
  constructor(
    public firebaseService: FirebaseService,
    private router: Router
  ) {}

  /** init life cycle call back */
  ngOnInit() {
    this.getData();
  }

  /** get item list from cloud */
  getData() {
    this.firebaseService.getItems().subscribe((result) => {
      this.items = result;
    });
  }

  /** go to details page of the item */
  viewDetails(item) {
    this.router.navigate(['/details/' + item.payload.doc.id]);
  }
}
