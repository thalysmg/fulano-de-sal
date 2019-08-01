import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  

  signIn(){
    var email = (<HTMLInputElement>document.getElementById('email')).value;
    var password = (<HTMLInputElement>document.getElementById('password')).value;    
    this.authenticate(email, password);
  }

  authenticate(email, password){
    return this.authService.emailAndPasswordAuth(email, password);
  }


  

}
