import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import Axios from 'axios';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goToPreviousPage() {
    this.location.back();
    localStorage.clear();
  }

  printOrders() {
    window.location.replace('https://us-central1-pwa-fulano-de-sal-51556.cloudfunctions.net/printOrders');
  }

}
