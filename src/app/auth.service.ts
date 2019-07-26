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

  googleAuth(){
    let googleAuthProvider = new auth.GoogleAuthProvider();
    googleAuthProvider.addScope('profile')
    googleAuthProvider.addScope('email')
    return this.authLogin(googleAuthProvider)
  }

  authLogin(authProvider){
    return this.afAuth.auth.signInWithPopup(authProvider)
    .then(result => {
      console.log('Logado');
      console.log(result);
    })
    .catch(error => {
      console.log('Erro ao logar');
      console.log(error);
    })
  }

  getUserDetails(){
    //post these details to API server return user info if correct
  }



}
