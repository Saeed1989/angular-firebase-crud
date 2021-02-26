/**
 * Home page component
 *
 * @version  0.1.1
 * @url
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
  items: Array<any>;

  constructor(
    public firebaseService: FirebaseService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.firebaseService.getItems().subscribe((result) => {
      this.items = result;
      console.log(this.items);
    });
  }

  viewDetails(item) {
    this.router.navigate(['/details/' + item.payload.doc.id]);
  }
}
