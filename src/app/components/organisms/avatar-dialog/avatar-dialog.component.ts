/**
 * Avatar dialog component
 *
 * @version  0.1.1
 * @url
 *
 * Copyright Md Saeed Sharman.
 * Licensed under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 */

import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FirebaseService } from '../../../services/firebase.service';

@Component({
  selector: 'app-avatar-dialog',
  templateUrl: './avatar-dialog.component.html',
  styleUrls: ['./avatar-dialog.component.scss'],
})
export class AvatarDialogComponent implements OnInit {
  avatars: Array<any> = new Array<any>();

  constructor(
    public dialogRef: MatDialogRef<AvatarDialogComponent>,
    public firebaseService: FirebaseService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.firebaseService
      .getAvatars()
      .subscribe((data) => (this.avatars = data));
  }

  close(avatar): void {
    this.dialogRef.close(avatar);
  }
}
