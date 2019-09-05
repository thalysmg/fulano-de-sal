import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-atualiza-dados',
  templateUrl: './atualiza-dados.component.html',
  styleUrls: ['./atualiza-dados.component.css']
})
export class AtualizaDadosComponent implements OnInit {

  constructor(public db: AngularFirestore, private router: Router) { }

  ngOnInit() {
  }

  updateUser() {
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const phonenumber = (document.getElementById('phone-number') as HTMLInputElement).value;
    this.updateUserData(localStorage.getItem('uid'), username, phonenumber);
  }

  /* Receives user id, the new name and the new phone number. Updated the user with the given id */
  updateUserData(uid, name, number) {
    this.db.collection('users').doc(uid).update({username: name, phoneNumber: number})
    .then(() => {
      console.log('Usuario atualizado com sucesso');
      this.router.navigate(['pedir-marmita']);
    })
    .catch(err => {
      console.log('Erro ao atualizar os dados do usuario');
      console.log(err);
    });
  }
}
