/**
 * service for handling the loading indicator
 */
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../../models/Item.model';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  loadingSubject = new BehaviorSubject<boolean>(false);

  constructor() {}

  /** show the loading spinner */
  showLoadingIndicator() {
    this.loadingSubject.next(true);
  }

  /** hide the loading spinner */
  hideLoadingIndicator() {
    this.loadingSubject.next(false);
  }
}
