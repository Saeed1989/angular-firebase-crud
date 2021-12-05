/**
 * Add page component
 *
 * @version  1.0.0
 * @url https://github.com/Saeed1989/Breaking-news-app-admin-panel
 *
 * Copyright Md Saeed Sharman.
 * Licensed under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 */

import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../../services/firebase/firebase.service';
import { Router } from '@angular/router';
import { Item } from '../../../models/Item.model';
import { LoadingService } from 'src/app/services/loading/loading.service';

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
   * @param loadingService loading indicator service
   */
  constructor(
    public firebaseService: FirebaseService,
    private router: Router,
    private loadingService: LoadingService
  ) {}

  /** init lifecycle call back */
  ngOnInit() {
    this.firebaseService.getLastId().subscribe((result: any) => {
      this.item.id = result.payload.data().maxId + 1;
      if (this.item.id > 9999) {
        this.item.id = 0;
      }
    });
  }

  /** save the item to cloud */
  saveItem() {
    this.loadingService.showLoadingIndicator();
    this.firebaseService.setLastId(this.item.id);
    this.firebaseService
      .creteItem(this.item)
      .then((res) => {
        this.router.navigate(['/home']);
      })
      .catch((err) => {
        this.handleError(err);
      })
      .finally(() => {
        this.loadingService.hideLoadingIndicator();
      });
  }

  /** cancel the process */
  cancel() {
    this.router.navigate(['/home']);
  }

  /** process user input of image file */
  handleFileInput(files: any) {
    this.firebaseService
      .uploadImage(files[0])
      .then((response) => {
        this.item.imageUrl = response;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  /** process when there is error */
  handleError(err: any) {
    console.error(err);
    alert(err.toString());
  }
}
