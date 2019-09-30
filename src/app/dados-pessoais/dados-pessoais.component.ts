import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.css']
})
export class DadosPessoaisComponent implements OnInit {

  constructor(public db: AngularFirestore) { }

  ngOnInit() {
  }

  registerUser() {
    const username = ( document.getElementById('username') as HTMLInputElement).value;
    const phonenumber = ( document.getElementById('phone-number') as HTMLInputElement).value;
    this.registerUserData(localStorage.getItem('uid'), username, phonenumber);
  }

  registerUserData(uid, name, number) {
    this.db.collection('users').doc(uid).update({username: name, phoneNumber: number})
    .then(() => {
      console.log('Usuario cadastrado com sucesso');
    })
    .catch(err => {
      console.log('Erro ao cadastrar os dados do usuario');
      console.log(err);
    });
  }


}
