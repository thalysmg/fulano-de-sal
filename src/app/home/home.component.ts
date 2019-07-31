import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import  {AuthService}  from '../auth.service'
=======
>>>>>>> 1ee39278d9961793e9d8e326b2a4d168469e223e

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  breakpoint: number = 0;
<<<<<<< HEAD
  constructor(public authService: AuthService) { }
=======
  constructor() { }
>>>>>>> 1ee39278d9961793e9d8e326b2a4d168469e223e

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 6;
}

onResize(event) {
  this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 6;
}

<<<<<<< HEAD

=======
>>>>>>> 1ee39278d9961793e9d8e326b2a4d168469e223e
}
