import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  breakpoint = 0;
  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 6;
}

onResize(event) {
  this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 6;
}

onGoogleLogin() {
  // this.authService.googleAuth();
}


}
