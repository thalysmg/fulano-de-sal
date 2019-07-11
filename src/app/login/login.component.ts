import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  breakpoint: number = 0;
  constructor() { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 6;
}

onResize(event) {
  this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 6;
}

}
