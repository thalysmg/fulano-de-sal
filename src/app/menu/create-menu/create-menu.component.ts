import { Component, OnInit, NgZone } from '@angular/core';
import {CreateMenuService} from '../../firebase-services/create-menu.service';
import { Location } from '@angular/common';
import { AngularFirestore } from '@angular/fire/firestore';
import Axios from 'axios';
//import * as cloneDeep from 'lodash.clonedeep'; //essa lib faz um clone de arrays de objetos
//import { log } from 'util';

@Component({
  selector: 'app-create-menu',
  templateUrl: './create-menu.component.html',
  styleUrls: ['./create-menu.component.css']
})
export class CreateMenuComponent implements OnInit {
  categorias = [];
  message: string;
  menu1 = {
    available: true,
    menu: [],
    additionalSections: []
  };
  menu = [
    {
      id: 0,
      maxChoices: 0,
      nome: 'Arroz',
      opcoes: []
    },
    {
      id: 1,
      maxChoices: 0,
      nome: 'Feijão',
      opcoes: []
    },
    {
      id: 2,
      maxChoices: 0,
      nome: 'Macarrão',
      opcoes: []
    },
    {
      id: 3,
      maxChoices: 0,
      nome: 'Carne',
      opcoes: []
    },
    {
      id: 4,
      maxChoices: 0,
      nome: 'Salada',
      opcoes: []
    },
    {
      id: 5,
      maxChoices: 0,
      nome: 'Acompanhamentos',
      opcoes: []
    },
    {
      id: 6,
      maxChoices: 0,
      nome: 'Bebidas',
      opcoes: []
    },
    {
      id: 7,
      maxChoices: 0,
      nome: 'Sobremesa',
      opcoes: []
    },
    {
      id: 8,
      maxChoices: 0,
      nome: 'Local',
      opcoes: []
    }
  ];

  constructor(private location: Location, private ngZone: NgZone, private db: AngularFirestore) {}

  ngOnInit() {
    this.categorias = this.getSections();
    console.log(this.categorias);

    this.db.collection('menu').ref.orderBy('timestamp', 'desc').limit(1).get()
    .then(result => {
      result.docs.map(doc => {
        this.ngZone.run(() => {
          this.menu1 = doc.data() as {menu: [], additionalSections: [], available: boolean};
        });
        console.log(this.menu1);
      });
    })
    .catch(err => {
      console.log('Erro ao recuperar o cardápio do dia');
      console.log(err);
    });

  }

  /**
   * Função que retorna as seções do BD com os itens previamente registrados
   */
  getSections() {
    let sections = [];
    this.db.collection('sections').ref.orderBy('id').get()
    .then(result => {
        result.docs.map(section => {
            sections.push(section.data());
        });
    })
    .catch(err => {
        sections = [];
        console.log(err);
    });
    // console.log(sections);

    return sections;
}

  /**
   * Função que cria o menu do dia
   */
  onCreateMenu() {
    this.db.collection('menu').add({menu: this.menu})
    .then(res => {
      console.log('Cardapio atualizado com sucesso!');
      window.location.reload();
    })
    .catch(err => {
      console.log('Erro ao atualizar cardapio!');
    });
    console.log(this.menu);
  }
  goToPreviousPage() {
    this.location.back();
  }

  closeMenu() {
    Axios.get('https://us-central1-pwa-fulano-de-sal-51556.cloudfunctions.net/closeMenu').then((res) => {
      console.log(res);
      window.location.reload();
    });
  }
}

