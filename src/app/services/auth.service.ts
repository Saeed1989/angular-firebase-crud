import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogIn: boolean = false;

  constructor(private fireAuthService: AngularFireAuth) {}

  signInWithEmailAndPassword(email: string, password: string): Promise<any> {
    return new Promise((resolve: any, reject: any)=>{
      this.fireAuthService.signInWithEmailAndPassword(email, password).then(()=>{
        this.isLogIn = true;
        resolve();
      }).catch((err) => {
        reject(err);
      });
    });
  }

    isLoggedIn(): boolean {
      return this.isLogIn;
    }

    logOut() {
      this.fireAuthService.signOut().then(() => {
      this.isLogIn = false;
    }).catch((err) => {
      console.log(err);
    });
    }

}