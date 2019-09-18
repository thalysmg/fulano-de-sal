import { Component, OnInit } from '@angular/core';
import { ItemService } from '../firebase-services/items.service';
import { Location } from '@angular/common';
import { CreateMenuService } from '../firebase-services/create-menu.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { parse } from 'url';


export class App {
  desc: string;
  name: string;
  price: number;
}

@Component({
  selector: 'app-estoque-de-itens',
  templateUrl: './estoque-de-itens.component.html',
  styleUrls: ['./estoque-de-itens.component.css']
})

export class EstoqueDeItensComponent implements OnInit {

  categorias = [];

  itemPorCategoria = [
    {nomeCategoria: 'Arroz', nomeItem: ''},
    {nomeCategoria: 'Feijão', nomeItem: ''},
    {nomeCategoria: 'Macarrão', nomeItem: ''},
    {nomeCategoria: 'Carne', nomeItem: ''},
    {nomeCategoria: 'Saladas', nomeItem: ''},
    {nomeCategoria: 'Acompanhamentos', nomeItem: ''},
    {nomeCategoria: 'Bebidas', nomeItem: '', preco: ''},
    {nomeCategoria: 'Sobremesas', nomeItem: '', preco: ''},
    {nomeCategoria: 'Local', nomeItem: ''}
  ];


  constructor(private db: AngularFirestore, private createMenuService: CreateMenuService, private location: Location) { }

  ngOnInit() {
    this.categorias = this.createMenuService.getSections();
    console.log(this.categorias);
  }

  /**
   * Função que adiciona um item numa categoria predefinida
   * @param i índice da categoria na qual o item será adicionado, com ele temos acesso ao nome da categoria
   * no array 'itemPorCategoria' ao nome do item que será adicionado e ao preço, caso seja bebida ou sobremesa
   */
  addItem(i: number) {
    const nomeCategoria = this.itemPorCategoria[i].nomeCategoria;
    let item;
    if (i === 6 || i === 7) {
      item = { name: this.itemPorCategoria[i].nomeItem, unitPrice: Number(this.itemPorCategoria[i].preco) };
    } else {
      item = { name: this.itemPorCategoria[i].nomeItem };
    }

    let currentItems;
    const docRef = this.db.collection('sections').doc(nomeCategoria);
    docRef.get()
    .toPromise()
    .then(doc => {
      currentItems = doc.data().opcoes;
      currentItems.push(item);
      this.db.collection('sections').doc(nomeCategoria).update({
        opcoes: currentItems
      })
      .then(() => {
        console.log('Seção atualizada com sucesso');
        window.location.reload();
      })
      .catch(err => {
        console.log('Erro ao atualizar a seção: ' + nomeCategoria);
        console.log(err);
      });
    })
    .catch(err => {
      console.log('Erro ao recuperar os itens atuais da seção ' + nomeCategoria);
      console.log(err);
    });
  }

  /**
   * Função que remove um item de uma categoria determinada, através do nome do item e do nome da categoria
   * @param nomeCategoria nome da categoria na qual o item será removido
   * @param item item que será removido
   */
  deleteItem(nomeCategoria: string, item: string) {
    this.db.collection('sections').doc(nomeCategoria).get().toPromise().then(doc => {
      let currentItems = doc.data().opcoes;
      currentItems = currentItems.filter((opcao) => {
        return opcao.name !== item;
      });
      this.db.collection('sections').doc(nomeCategoria).update({
        opcoes: currentItems
      })
      .then(() => {
        console.log('Item removido com sucesso');
        window.location.reload();
      })
      .catch(err => {
        console.log('Não foi possível remover o item.');
        console.log(err);
      });
    }).catch(err => {
      console.log('Ocorreu um erro ao recuperar os itens do db');
      console.log(err);
    });
  }

  goToPreviousPage() {
    this.location.back();
  }

}
