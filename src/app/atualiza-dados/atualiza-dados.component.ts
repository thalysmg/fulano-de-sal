import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-atualiza-dados',
  templateUrl: './atualiza-dados.component.html',
  styleUrls: ['./atualiza-dados.component.css']
})
export class AtualizaDadosComponent implements OnInit {

  constructor(public db: AngularFirestore) { }

  ngOnInit() {
  }

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

}
