import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  email = '';
  password = '';

  constructor(public authService: AuthService, private router: Router, private location: Location) { }

  ngOnInit() {
  }

  signIn() {
    const email1 = (document.getElementById('email') as HTMLInputElement).value;
    const password2 = (document.getElementById('password') as HTMLInputElement).value;
    // console.log(email1, password2);

    this.authenticate(email1, password2);
  }

  authenticate(email, password) {
    this.authService.emailAndPasswordAuth(email, password);
  }

  goToPreviousPage() {
    this.location.back();
  }
}
