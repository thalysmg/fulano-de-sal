import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth,
    public db: AngularFirestore,
    private route: Router
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
      console.log('Logado');
      console.log(result);
      localStorage.setItem('uid', result.user.uid);
    })
    .catch(error => {
      console.log('Erro ao logar');
      console.log(error);
    });

    /* Verifica se o usuario logado está logando pela 1a vez ou não, para atualizar
    seu numero de telefone e nome caso for a 1a vez. */
    const uid = localStorage.getItem('uid');
    if (uid != null) {
      this.db.collection('users').doc(uid).get().toPromise()
      .then(doc => {
      console.log(doc.data());
      if ((typeof doc.get('username')) === 'undefined'
        && (typeof doc.get('phoneNumber')) === 'undefined') {
          this.route.navigate(['atualiza-dados']);
        } else {
          /*TODO: Mudar para uma tela de menu ou algo similar */
          console.log('TODO: Mudar para uma tela de menu ou algo similar');
          /*TODO: Mudar para uma tela de menu ou algo similar */
        }
    })
    .catch(err => {
      console.log('Error while checking if user has name and phone');
    });
    }
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
      alert('Login de administrador realizado com sucesso!');
      console.log(res);
      this.route.navigate(['/home-admin']);
    }).catch(err => {
      alert('Ocorreu um erro ao tentar realizar o login');
      console.log(err);
    });
  }



}
