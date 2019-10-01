import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private db: AngularFirestore) { }
  private isAuthenticated = false;

  private user = {};

  async canActivate() {
    const id = localStorage.getItem('uid');
    console.log(id);

    await this.db.collection('users').doc(id).get().toPromise().then((res) => {
      const userInfo = res.data() as {
        username: string,
        email: string,
        phoneNumber: string,
        photoUrl: string,
        roles: []
      };
      if (userInfo.roles.length > 1) {
        this.isAuthenticated = true;
      } else {
        this.isAuthenticated = false;
      }
    });
    return this.isAuthenticated;
  }
}
