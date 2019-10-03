import { Injectable, NgZone } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth,
    public db: AngularFirestore,
    private route: Router,
    private ngZone: NgZone,
    private location: Location
  ) { }

  /*
    Use GoogleAuthProvider to authenticates the user.
  */
  googleAuth() {
    const googleAuthProvider = new auth.GoogleAuthProvider();
    googleAuthProvider.addScope('profile');
    googleAuthProvider.addScope('email');
    return this.authLogin(googleAuthProvider);
  }

  facebookAuth() {
    const facebookAuthProvider = new auth.FacebookAuthProvider();
    return this.authLogin(facebookAuthProvider);
  }

  /*
    Receives an authProvider (can be GoogleAuthProvider for example)
    and use this provider to authenticates the user.
  */
  authLogin(authProvider) {
    this.afAuth.auth.signInWithPopup(authProvider)
    .then(result => {
      console.log(result);
      localStorage.setItem('uid', result.user.uid);
      // localStorage.setItem('name', result.additionalUserInfo.profile.name);
      // localStorage.setItem('email', result.additionalUserInfo.profile.email);
      const uid = localStorage.getItem('uid');
      console.log(uid);

      if (uid != null) {
        this.db.collection('users').doc(uid).get().toPromise()
        .then(doc => {
          console.log(doc.data());
          if ((typeof doc.get('username')) === 'undefined' && (typeof doc.get('phoneNumber')) === 'undefined') {
            // this.ngZone.run(() => {
            //   this.route.navigate(['atualiza-dados']);
            // });
            this.location.go('/atualiza-dados');
            window.location.reload();
          } else {
          /*TODO: Mudar para uma tela de menu ou algo similar */
          // this.ngZone.run(() => {
          //   this.route.navigate(['pedir-marmita']);
          // });
          this.location.go('/pedir-marmita');
          window.location.reload();
            /*TODO: Mudar para uma tela de menu ou algo similar */
          }
        })
        .catch(err => {
          console.log('Error while checking if user has name and phone');
        });
      }
    })
    .catch(error => {
      alert('Não foi possível realizar o login');
      console.log(error);
    });

    /* Verifica se o usuario logado está logando pela 1a vez ou não, para atualizar
    seu numero de telefone e nome caso for a 1a vez. */

  }

  getUserDetails() {
    return JSON.parse(localStorage.getItem('logged-in'));
  }

  /*
    Receives an email and password from the user and authenticates the user.
  */
  emailAndPasswordAuth(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then(res => {
      console.log(res);
      localStorage.setItem('uid', res.user.uid);
      this.location.go('/home-admin');
      window.location.reload();
    }).catch(err => {
      alert('Ocorreu um erro ao tentar realizar o login');
      console.log(err);
    });
  }



}
