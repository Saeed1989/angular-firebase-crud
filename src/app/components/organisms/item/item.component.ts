/**
 * Item component
 *
 * @version  0.1.2
 * @url https://github.com/Saeed1989/Breaking-news-app-admin-panel
 *
 * Copyright Md Saeed Sharman.
 * Licensed under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 */

import {
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FirebaseService } from '../../../services/firebase.service';
import { Item } from '../../../model/Item';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {

  @Input() value: Item;

  @Output() itemSave = new EventEmitter();

  @Output() itemDelete = new EventEmitter();

  @Output() processCancel = new EventEmitter();

  exampleForm: FormGroup;
  imageUrl = null;

  /**
   * constructor
   * @param firebaseService service for firebase cloud operation
   * @param dialog material dialog
   */
  constructor(
    public firebaseService: FirebaseService,
    public dialog: MatDialog
  ) {}

  /** process user input of image file */
  handleFileInput(files: any) {
    this.firebaseService
      .uploadImage(files[0])
      .then((response) => {
        console.log(response);
        this.imageUrl = response;
        this.value.imageUrl = this.imageUrl;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  /** submit the process */
  onSubmit() {
      this.itemSave.emit();
  }

  /** delete the item */
  delete() {
    this.itemDelete.emit();
  }

  /** cancel the process */
  cancel() {
    this.processCancel.emit();
  }
}
