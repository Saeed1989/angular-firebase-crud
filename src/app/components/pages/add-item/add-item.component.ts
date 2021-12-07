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
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { BaseItemCtrl } from '../../organisms/item-base/base-item.component';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent extends BaseItemCtrl implements OnInit {
  /**
   * constructor
   * @param firebaseService service for firebase cloud operation
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

  /** init lifecycle call back */
  ngOnInit() {
    this.firebaseService.getLastId().subscribe((result: any) => {
      this.item.id = result.payload.data().maxId + 1;
      if (this.item.id > 9999) {
        this.item.id = 0;
      }
    });
  }
}
