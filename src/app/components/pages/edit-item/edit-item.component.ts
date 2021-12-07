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
import { BaseItemCtrl } from '../../organisms/base-item-ctrl/base-item-ctrl';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss'],
})
export class EditItemComponent extends BaseItemCtrl implements OnInit {
  /**
   * constructor
   * @param firebaseService service for firebase cloud service
   * @param route route
   * @param router router
   * @param loadingService loading indicator service
   */
  constructor(
    public firebaseService: FirebaseService,
    public route: ActivatedRoute,
    public router: Router,
    public loadingService: LoadingService
  ) {
    super(firebaseService, route, router, loadingService);
  }

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
}
