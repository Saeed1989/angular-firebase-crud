/**
 * Loading overlay component
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
  OnInit,
  SimpleChanges,
  OnChanges,
} from '@angular/core';

@Component({
  selector: 'app-loading-overlay',
  templateUrl: './loading-overlay.component.html',
  styleUrls: ['./loading-overlay.component.scss'],
})
export class LoadingOverlayComponent implements OnInit, OnChanges {
  /** flag for loading status */
  @Input() isLoading: boolean;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnChanges(changes: SimpleChanges) {
    this.handleScroll(changes.isLoading.currentValue);
  }

  handleScroll(isLoading: boolean) {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.removeProperty('overflow');
    }
  }
}
