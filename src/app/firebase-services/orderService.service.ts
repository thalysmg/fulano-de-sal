import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
  })
export class OrderService {

  constructor(private db: AngularFirestore) {

  }

  /*
    Funcao que retorna uma lista com os últimos menus criados pelo usuário 
    e armazenados no banco de dados.
    Retorna os últimos "n" (parâmetro) menus criados pelo admin.
    Caso não exista nenhum menu criado, retorna um array vazio.
    */
  getMenu(n){
    var menu = []
    this.db.collection('menu').ref.orderBy('timestamp', 'asc').limit(n).get()
    .then(result => {
      menu = result.docs.map(doc => {
        menu.push(doc.data())
        })
    })
    .catch(err => {
      console.log('Erro ao recuperar o cardápio do dia');
        console.log(err);
    })
    return menu;
  }
  
}
