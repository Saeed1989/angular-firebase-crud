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

  getAvatars() {
    return this.db.collection('/avatar').valueChanges();
  }

  searchItems(searchValue) {
    return this.db
      .collection('items_table', (ref) =>
        ref
          .where('name', '>=', searchValue)
          .where('name', '<=', searchValue + '\uf8ff')
      )
      .snapshotChanges();
  }

  searchUsersByNumber(value) {
    return this.db
      .collection('items_table', (ref) => ref.orderBy('number').startAt(value))
      .snapshotChanges();
  }

  getItem(itemKey: any) {
    return this.db.collection('items_table').doc(itemKey).snapshotChanges();
  }

  updateItem(itemKey: any, value: Item) {
    return this.db.collection('items_table').doc(itemKey).set(value);
  }

  deleteItem(userKey: any) {
    return this.db.collection('items_table').doc(userKey).delete();
  }

  getItems() {
    return this.db
      .collection('items_table', (ref) => ref.orderBy('number'))
      .snapshotChanges();
  }

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

  getLastId() {
    return this.db
      .collection('app_settings')
      .doc('cloudSettings')
      .snapshotChanges();
  }

  setLastId(value: number) {
    return this.db
      .collection('app_settings')
      .doc('cloudSettings')
      .update({ maxId: value });
  }
}
