import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth
  ) { }

  /*
    Use GoogleAuthProvider to authenticates the user.
  */
  googleAuth(){
    let googleAuthProvider = new auth.GoogleAuthProvider();
    googleAuthProvider.addScope('profile')
    googleAuthProvider.addScope('email')
    return this.authLogin(googleAuthProvider)
  }

  /*
    Receives an authProvider (can be GoogleAuthProvider for example)
    and use this provider to authenticates the user.
  */
  authLogin(authProvider){
    return this.afAuth.auth.signInWithPopup(authProvider)
    .then(result => {
      console.log('Logado');
      console.log(result);
      localStorage.setItem('logged-in', JSON.stringify(result.additionalUserInfo.profile));
    })
    .catch(error => {
      console.log('Erro ao logar');
      console.log(error);
    })
  }

  getUserDetails(){
    return JSON.parse(localStorage.getItem('logged-in'))
  }

  /*
    Receives an email and password from the user and authenticates the user.
  */
  emailAndPasswordAuth(email, password){
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then(res => {
      console.log('Usuario logado usando email e senha com sucesso!');
      console.log(res);
    }).catch(err => {
      console.log('Ocorreu um erro ao tentar logar usando email e senha.');
      console.log(err);
    })
  }



}
