/**
 * Edit page component
 *
 * @version  0.1.2
 * @url https://github.com/Saeed1989/Breaking-news-app-admin-panel
 *
 * Copyright Md Saeed Sharman.
 * Licensed under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FirebaseService } from '../../../services/firebase.service';
import { Router } from '@angular/router';
import { Item } from '../../../model/Item';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss'],
})
export class EditItemComponent implements OnInit {

  /** data for item to be editted */
  item: Item = null;

  /** key of the item  - item id*/
  itemKey = 0;

  /**
   * constructor
   * @param firebaseService service for firebase cloud service
   * @param route route
   * @param router router
   * @param dialog material dialog
   */
  constructor(
    public firebaseService: FirebaseService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) {}

  /** init life cycle call back */
  ngOnInit() {
    this.route.data.subscribe((routeData) => {
      const data = routeData.data;
      if (data) {
        let newItem: Item = data.payload.data();
        this.itemKey = data.payload.id;
        this.item = newItem;
        console.log(this.item);
      }
    });
  }

  /** save the item to cloud*/
  saveItem() {
    this.firebaseService.updateItem(this.itemKey, this.item).then((res) => {
      this.router.navigate(['/home']);
    });
  }

  /** delete the item from cloud */
  delete() {
    this.firebaseService
      .deleteItem(this.itemKey)
      .then(
        (res) => {
          this.router.navigate(['/home']);
        },
        (err) => {
          console.log(err);
        }
      )
      .catch((err) => {
        console.log(err);
      });
  }

  /** cancel the process */
  cancel() {
    this.router.navigate(['/home']);
  }
}
