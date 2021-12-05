/**
 * Edit page component
 *
 * @version  1.0.0
 * @url https://github.com/Saeed1989/Breaking-news-app-admin-panel
 *
 * Copyright Md Saeed Sharman.
 * Licensed under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 */

import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../../../services/firebase/firebase.service';
import { Router } from '@angular/router';
import { Item } from '../../../models/Item.model';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { YesNoDialogComponent } from '../../organisms/yesnodialog/yesno-dialog.component';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss'],
})
export class EditItemComponent implements OnInit {
  /** data for item to be editted */
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

  /** key of the item  - item id*/
  itemKey = 0;

  @ViewChild('confirmation')
  confirmation: YesNoDialogComponent;

  /**
   * constructor
   * @param firebaseService service for firebase cloud service
   * @param route route
   * @param router router
   * @param loadingService loading indicator service
   */
  constructor(
    public firebaseService: FirebaseService,
    private route: ActivatedRoute,
    private router: Router,
    private loadingService: LoadingService
  ) {}

  /** init life cycle call back */
  ngOnInit() {
    this.route.data.subscribe((routeData) => {
      const data = routeData.data;
      if (data) {
        setTimeout(() => {
          let newItem: Item = data.payload.data();
          this.itemKey = data.payload.id;
          this.item = newItem;
        });
      }
    });
  }

  /** save the item to cloud*/
  saveItem() {
    this.loadingService.showLoadingIndicator();
    this.firebaseService
      .updateItem(this.itemKey, this.item)
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

  /** delete the item from cloud */
  delete() {
    this.confirmation.open();
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

  deleteConfirmation(confirmation: boolean) {
    if (confirmation) {
      this.loadingService.showLoadingIndicator();
      this.firebaseService
        .deleteItem(this.itemKey)
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
  }
}
