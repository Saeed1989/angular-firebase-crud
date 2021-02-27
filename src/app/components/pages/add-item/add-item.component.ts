/**
 * Add page component
 *
 * @version  0.1.2
 * @url https://github.com/Saeed1989/Breaking-news-app-admin-panel
 *
 * Copyright Md Saeed Sharman.
 * Licensed under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 */

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FirebaseService } from '../../../services/firebase.service';
import { Router } from '@angular/router';
import { Item } from '../../../model/Item';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent implements OnInit {
  /** item data to be added */
  item: Item = {
    id: null,
    number: null,
    name: null,
    date: null,
    type: null,
    imageUrl: null,
    url: null,
    details: null,
  };

  /**
   * constructor
   * @param firebaseService service for firebase cloud operation
   * @param router router
   * @param dialog material dialog
   */
  constructor(
    public firebaseService: FirebaseService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  /** init lifecycle call back */
  ngOnInit() {
    this.firebaseService.getLastId().subscribe((result: any) => {
      console.log(result.payload.data());
      this.item.id = result.payload.data().maxId + 1;
      if (this.item.id > 9999) {
        this.item.id = 0;
      }
    });
  }

  /** save the item to cloud */
  saveItem() {
    console.log(this.item);
    this.firebaseService.setLastId(this.item.id);
    this.firebaseService.creteItem(this.item).then((res) => {
      console.log(res);
      this.router.navigate(['/home']);
    });
  }

  /** fake delete - no cloud operation */
  delete() {
    this.router.navigate(['/home']);
  }

  /** cancel the process */
  cancel() {
    this.router.navigate(['/home']);
  }
}
