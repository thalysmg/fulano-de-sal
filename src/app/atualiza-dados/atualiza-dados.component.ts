import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { AngularFirestore } from '@angular/fire/firestore';
=======
>>>>>>> 1ee39278d9961793e9d8e326b2a4d168469e223e

@Component({
  selector: 'app-atualiza-dados',
  templateUrl: './atualiza-dados.component.html',
  styleUrls: ['./atualiza-dados.component.css']
})
export class AtualizaDadosComponent implements OnInit {

<<<<<<< HEAD
  constructor(public db: AngularFirestore) { }
=======
  constructor() { }
>>>>>>> 1ee39278d9961793e9d8e326b2a4d168469e223e

  ngOnInit() {
  }

<<<<<<< HEAD
  updateUser(){
    var username = (<HTMLInputElement>document.getElementById('username')).value;
    var phonenumber = (<HTMLInputElement>document.getElementById('phone-number')).value;
    this.updateUserData(localStorage.getItem('uid'), username, phonenumber);
  }

  /* Receives user id, the new name and the new phone number. Updated the user with the given id */
  updateUserData(uid, name, number){
    this.db.collection('users').doc(uid).update({username: name, phoneNumber: number})
    .then(() => {
      console.log('Usuario atualizado com sucesso');
    })
    .catch(err => {
      console.log('Erro ao atualizar os dados do usuario');
      console.log(err);
    })
  }

=======
>>>>>>> 1ee39278d9961793e9d8e326b2a4d168469e223e
}
