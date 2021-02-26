/**
 * service for read and write operation to firebase cloud
 */
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Item } from '../model/Item';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private readonly ITEM_IMG_FOLDER = 'itemImages/';
  constructor(
    public db: AngularFirestore,
    private afStorage: AngularFireStorage
  ) {}

  /**
   * get item data from cloud
   * @param itemKey item key
   */
  getItem(itemKey: any) {
    return this.db.collection('items_table').doc(itemKey).snapshotChanges();
  }

  /**
   * update item data to cloud
   * @param itemKey item key
   * @param value value of item
   */
  updateItem(itemKey: any, value: Item) {
    return this.db.collection('items_table').doc(itemKey).set(value);
  }

  /**
   * delete item from cloud
   * @param itemKey item key
   */
  deleteItem(itemKey: any) {
    return this.db.collection('items_table').doc(itemKey).delete();
  }

  /** get all the items from cloud */
  getItems() {
    return this.db
      .collection('items_table', (ref) => ref.orderBy('number'))
      .snapshotChanges();
  }

  /**
   * add item data to cloud
   * @param value value of itme
   */
  creteItem(value: Item) {
    return this.db.collection('items_table').add({
      id: value.id,
      number: value.number,
      name: value.name,
      date: value.date,
      type: value.type,
      imageUrl: value.imageUrl,
      url: value.url,
      details: value.details,
    });
  }

  /**
   * upload item image file to cloud
   * @param file image file
   */
  uploadImage(file: any): Promise<any> {
    // create a random id
    const randomId = Math.random().toString(36).substring(2);
    const ref = this.afStorage.ref(this.ITEM_IMG_FOLDER + randomId);
    return new Promise<any>((resolve: any, reject: any) => {
      ref
        .put(file)
        .then(() => {
          ref.getDownloadURL().subscribe((response) => {
            resolve(response);
          });
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  /** get id of last added item */
  getLastId() {
    return this.db
      .collection('app_settings')
      .doc('cloudSettings')
      .snapshotChanges();
  }

  /** set id of last added item
   * @param id id
   */
  setLastId(id: number) {
    return this.db
      .collection('app_settings')
      .doc('cloudSettings')
      .update({ maxId: id });
  }
}
