import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pedidos-realizados',
  templateUrl: './pedidos-realizados.component.html',
  styleUrls: ['./pedidos-realizados.component.css']
})
export class PedidosRealizadosComponent implements OnInit {

  constructor(private location: Location, private router: Router, private afAuth: AngularFireAuth, private toastr: ToastrService) { }

  ngOnInit() {
    this.toastr.success('Pedido Realizado com Sucesso!', 'Olá!', {
      timeOut: 4000,
      positionClass: 'toast-top-center'
    });
  }

  goToPreviousPage() {
    this.location.back();
  }

  logout() {
    this.router.navigate(['']);
    localStorage.clear();
    this.afAuth.auth.signOut();
  }

}
