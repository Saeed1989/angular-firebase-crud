/**
 * Edit page component
 *
 * @version  0.1.1
 * @url 
 *
 * Copyright Md Saeed Sharman.
 * Licensed under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AvatarDialogComponent } from '../../organisms/avatar-dialog/avatar-dialog.component';
import { FirebaseService } from '../../../services/firebase.service';
import { Router } from '@angular/router';
import { Item } from '../../../model/Item';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {

  exampleForm: FormGroup;

 item: Item = null;
 itemKey: number = 0;

  constructor(
    public firebaseService: FirebaseService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.route.data.subscribe(routeData => {
      const data = routeData.data;
      if (data) {
        let newItem: Item = data.payload.data();
        this.itemKey = data.payload.id;
        this.item = newItem;
        console.log(this.item);
      }
    });
  }

  saveItem() {
    this.firebaseService.updateItem(this.itemKey, this.item)
    .then(
      res => {
        this.router.navigate(['/home']);
      }
    );
  }

  delete() {
    this.firebaseService.deleteItem(this.itemKey)
    .then(
      res => {
        this.router.navigate(['/home']);
      },
      err => {
        console.log(err);
      }
    ).catch(err => {
      console.log(err);
    });
  }

  cancel() {
    this.router.navigate(['/home']);
  }

}
