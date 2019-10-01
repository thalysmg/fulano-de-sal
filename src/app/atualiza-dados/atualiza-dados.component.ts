import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-atualiza-dados',
  templateUrl: './atualiza-dados.component.html',
  styleUrls: ['./atualiza-dados.component.css']
})
export class AtualizaDadosComponent implements OnInit {

  constructor(public db: AngularFirestore, private router: Router, private location: Location) { }

  formValido = false;
  formValido1 = false;
  username = '';
  phoneNumber = '';

  ngOnInit() {
  }

  updateUser() {
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const phonenumber = (document.getElementById('phone-number') as HTMLInputElement).value;
    const uid = localStorage.getItem('uid');
    console.log(uid);

    if (uid !== null) {
      this.updateUserData(uid, username, phonenumber);
    } else {
      localStorage.setItem('username', username);
      localStorage.setItem('phoneNumber', phonenumber);
      this.router.navigate(['pedir-marmita']);
    }

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

  goToPreviousPage() {
    this.location.back();
    localStorage.clear();
  }

  validateNameAndPhone(form: NgForm) {
    if (form.valid) {
      this.formValido = true;
    } else {
      this.formValido = false;
    }
    console.log(this.formValido);

  }

  validateNameAndPhone1(form1: NgForm) {
    if (form1.valid) {
      this.formValido1 = true;
    } else {
      this.formValido1 = false;
    }
  }
}
