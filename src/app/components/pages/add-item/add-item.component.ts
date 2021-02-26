/**
 * Add page component
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
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AvatarDialogComponent } from '../../organisms/avatar-dialog/avatar-dialog.component';
import { FirebaseService } from '../../../services/firebase.service';
import { Router } from '@angular/router';
import { Item } from '../../../model/Item';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent implements OnInit {
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

  constructor(
    public firebaseService: FirebaseService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.firebaseService.getLastId().subscribe((result: any) => {
      console.log(result.payload.data());
      this.item.id = result.payload.data().maxId + 1;
      if (this.item.id > 9999) {
        this.item.id = 0;
      }
    });
  }

  saveItem() {
    console.log(this.item);
    this.firebaseService.setLastId(this.item.id);
    this.firebaseService.creteItem(this.item).then((res) => {
      console.log(res);
      this.router.navigate(['/home']);
    });
  }

  delete() {
    this.router.navigate(['/home']);
  }

  cancel() {
    this.router.navigate(['/home']);
  }
}
