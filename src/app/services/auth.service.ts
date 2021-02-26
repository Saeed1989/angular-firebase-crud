/**
 * service to authenticate user log in to firebase
 */
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  /** log in flag */
  isLogIn: boolean = false;

  /**
   * constructor
   * @param fireAuthService service for checking authentication in firebase cloud
   */
  constructor(private fireAuthService: AngularFireAuth) {}

  /**
   * process sign in opertion
   * @param email input email id
   * @param password input password
   */
  signInWithEmailAndPassword(email: string, password: string): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
      this.fireAuthService
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          this.isLogIn = true;
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  /** check if user is logged in */
  isLoggedIn(): boolean {
    return this.isLogIn;
  }

  /** process log out operation */
  logOut() {
    this.fireAuthService
      .signOut()
      .then(() => {
        this.isLogIn = false;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
