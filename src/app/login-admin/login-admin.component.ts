import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import {AuthService} from '../auth.service';
=======
>>>>>>> 1ee39278d9961793e9d8e326b2a4d168469e223e

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

<<<<<<< HEAD
  constructor(public authService: AuthService) { }
=======
  constructor() { }
>>>>>>> 1ee39278d9961793e9d8e326b2a4d168469e223e

  ngOnInit() {
  }

<<<<<<< HEAD
  

  signIn(){
    var email = (<HTMLInputElement>document.getElementById('email')).value;
    var password = (<HTMLInputElement>document.getElementById('password')).value;    
    this.authenticate(email, password);
  }

  authenticate(email, password){
    return this.authService.emailAndPasswordAuth(email, password);
  }


  

=======
  loginUser(event){
    event.preventDefault
    console.log(event)
  }

>>>>>>> 1ee39278d9961793e9d8e326b2a4d168469e223e
}
