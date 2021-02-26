/**
 * Item component
 *
 * @version  0.1.1
 * @url https://github.com/Saeed1989/Breaking-news-app-admin-panel
 *
 * Copyright Md Saeed Sharman.
 * Licensed under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 */

import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  QueryList,
  AfterViewInit,
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
export class ItemComponent implements OnInit, AfterViewInit {
  @ViewChild('inpTitle', { static: false }) inpTitle: MatInput;
  @ViewChild('inpDetails', { static: false }) inpDetails: MatInput;
  @ViewChild('inpLink', { static: false }) inpLink: MatInput;
  @ViewChild('inpImageLink', { static: false }) inpImageLink: MatInput;
  @ViewChild('inpId', { static: false }) inpId: MatInput;
  @ViewChild('inpNumber', { static: false }) inpNumber: MatInput;
  @ViewChild('intType', { static: false }) intType: MatInput;
  @ViewChild('intDate', { static: false }) intDate: MatInput;

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

  ngOnInit() {}

  /** process after view is initialised - life cycle call back */
  ngAfterViewInit() {
    this.intDate.focus();
    this.intType.focus();
    this.inpImageLink.focus();
    this.inpId.focus();
    this.inpNumber.focus();
    this.inpLink.focus();
    this.inpDetails.focus();

    // last focus title
    this.inpTitle.focus();
  }

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
    if (
      this.inpDetails.errorState ||
      this.inpImageLink.errorState ||
      this.inpNumber.errorState ||
      this.inpTitle.errorState ||
      this.intType.errorState ||
      this.inpId.errorState ||
      this.inpLink.errorState
    ) {
      alert('There is error in input field');
    } else {
      this.itemSave.emit();
    }
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
