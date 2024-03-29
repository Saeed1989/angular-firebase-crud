/**
 * Yes no dialog component
 *
 * @version  1.0.0
 * @url https://github.com/Saeed1989/Breaking-news-app-admin-panel
 *
 * Copyright Md Saeed Sharman.
 * Licensed under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 */

import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialog } from '../../molecules/confirmdialog/confirm-dialog.component';

@Component({
  selector: 'app-yesno-dialog',
  templateUrl: './yesno-dialog.component.html',
  styleUrls: ['./yesno-dialog.component.scss'],
})
export class YesNoDialogComponent implements OnInit {
  /** flag for loading status */
  @Input() message: string;

  @Output() dialogResult = new EventEmitter();

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  /**
   * oen the dialog
   */
  open() {
    const dialogRef = this.dialog.open(ConfirmationDialog, {
      data: {
        message: this.message,
        buttonText: {
          ok: 'Yes',
          cancel: 'No',
        },
      },
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      this.close(confirmed);
    });
  }

  /**
   * close the dialog
   * @param result the result of the dialog : yes/no
   */
  close(result: boolean) {
    this.dialogResult.emit(result);
  }
}
