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

  constructor(public authService: AuthService, private router: Router, private location: Location) { }

  ngOnInit() {
  }

  signIn() {
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
    this.authenticate(email, password);
  }

  authenticate(email, password) {
    this.authService.emailAndPasswordAuth(email, password);
  }

  goToPreviousPage() {
    this.location.back();
  }

}
