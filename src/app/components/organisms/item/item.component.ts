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
  AfterViewInit,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FirebaseService } from '../../../services/firebase.service';
import { Item } from '../../../models/Item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements AfterViewInit {
  /** value of item */
  @Input() value: Item;

  /** value change event for two way binding */
  @Output() valueChange = new EventEmitter();

  /** save item event */
  @Output() itemSave = new EventEmitter();

  /** delete item event */
  @Output() itemDelete = new EventEmitter();

  /** process cancel event */
  @Output() processCancel = new EventEmitter();

  /** is for edit - flag */
  @Input() isEdit = false; // defauuld is add

  /** component state */
  itemState = {
    isEdit: false,
    isAdd: true, // default is add item
  };

  /**
   * constructor
   * @param firebaseService service for firebase cloud operation
   * @param dialog material dialog
   */
  constructor(
    public firebaseService: FirebaseService,
    public dialog: MatDialog
  ) {}

  /** process after view is initialised */
  ngAfterViewInit(): void {
    if (this.isEdit) {
      setTimeout(() => {
        this.itemState.isEdit = true;
        this.itemState.isAdd = false;
      });
    }
  }

  /** process user input of image file */
  handleFileInput(files: any) {
    this.firebaseService
      .uploadImage(files[0])
      .then((response) => {
        this.value.imageUrl = response;
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
