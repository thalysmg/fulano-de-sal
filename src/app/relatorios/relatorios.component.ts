import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.css']
})
export class RelatoriosComponent implements OnInit {

  constructor(private location: Location, private router: Router) { }

  ngOnInit() {
  }

  goToPreviousPage() {
    this.location.back();
  }

  logout() {
    this.router.navigate(['']);
    localStorage.clear();
  }
}
