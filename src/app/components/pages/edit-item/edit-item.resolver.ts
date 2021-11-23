/**
 * Item edit resolver
 *
 * @version  0.1.2
 * @url https://github.com/Saeed1989/Breaking-news-app-admin-panel
 *
 * Copyright Md Saeed Sharman.
 * Licensed under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 */

import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { FirebaseService } from '../../../services/firebase.service';

@Injectable()
export class EditItemResolver implements Resolve<any> {
  constructor(public firebaseService: FirebaseService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return new Promise((resolve, reject) => {
      const userId = route.paramMap.get('id');
      this.firebaseService.getItem(userId).subscribe((data) => {
        resolve(data);
      });
    });
  }
}
