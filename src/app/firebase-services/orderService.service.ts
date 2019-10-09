import { Injectable, NgZone } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';

@Injectable({
    providedIn: 'root'
  })
export class OrderService {

  constructor(private db: AngularFirestore, private toastr: ToastrService, private location: Location) {

  }

  /*
    Funcao que retorna uma lista com os últimos menus criados pelo usuário
    e armazenados no banco de dados.
    Retorna os últimos "n" (parâmetro) menus criados pelo admin.
    Caso não exista nenhum menu criado, retorna um array vazio.
    */
  getMenu(n) {
    let menu = [];
    this.db.collection('menu').ref.orderBy('timestamp', 'desc').limit(n).get()
    .then(result => {
      menu = result.docs.map(doc => {
        menu.push(doc.data());
        });
    })
    .catch(err => {
      console.log('Erro ao recuperar o cardápio do dia');
      console.log(err);
    });
    return menu;
  }


  /*
    Função que recebe um pedido e salva o mesmo no banco de dados
  */



  createOrder(order) {
    this.db.collection('orders').add(order)
    .then(res => {
      this.location.go('/pedidos-realizados');
      window.location.reload();
    })
    .catch(err => {
      console.log('Erro ao salvar pedido');
      console.log(err);
    });
  }
}
