/**
 * service to authenticate user log in to firebase
 */
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';
import {
  SessionItems,
  TEST_USER_CREDENTIALS,
} from '../../constants/common.constant';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  /** log in flag */
  isLogIn = false;

  /** test user flag */
  isTestUser = false;

  /** subject for log in and out event */
  loginSubject: BehaviorSubject<boolean> = new BehaviorSubject(true);

  /**
   * constructor
   * @param fireAuthService service for checking authentication in firebase cloud
   */
  constructor(private fireAuthService: AngularFireAuth) {
    this.fireAuthService.setPersistence('session');
  }

  /**
   * process sign in opertion
   * @param email input email id
   * @param password input password
   */
  signInWithEmailAndPassword(email: string, password: string): Promise<any> {
    this.loginSubject.next(true);
    // test user
    if (
      email == TEST_USER_CREDENTIALS.email &&
      TEST_USER_CREDENTIALS.password
    ) {
      return new Promise((resolve: any) => {
        this.isLogIn = true;
        this.isTestUser = true;
        sessionStorage.setItem(
          SessionItems.YOUSER_ATTRIBUTE,
          JSON.stringify({
            isLogIn: true,
            isTestUser: true,
          })
        );
        resolve();
      });
    }
    // real user
    return new Promise((resolve: any, reject: any) => {
      this.fireAuthService
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          sessionStorage.setItem(
            SessionItems.YOUSER_ATTRIBUTE,
            JSON.stringify({
              isLogIn: true,
            })
          );
          this.isLogIn = true;
          resolve();
        })
        .catch((err) => {
          this.loginSubject.next(false);
          reject(err);
        });
    });
  }

  /** check if user is logged in */
  isLoggedIn(): boolean {
    if (this.isLogIn) {
      return true;
    }
    let userAttr = JSON.parse(
      sessionStorage.getItem(SessionItems.YOUSER_ATTRIBUTE)
    );
    if (userAttr && userAttr.isLogIn) {
      return true;
    }
    return false;
  }

  /** process log out operation */
  logOut() {
    this.fireAuthService
      .signOut()
      .then(() => {
        this.isLogIn = false;
        sessionStorage.removeItem(SessionItems.YOUSER_ATTRIBUTE);
        this.loginSubject.next(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }
}
