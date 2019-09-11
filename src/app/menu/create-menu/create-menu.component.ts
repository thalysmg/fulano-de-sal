import { Component, OnInit } from '@angular/core';
import {CreateMenuService} from '../../firebase-services/create-menu.service';
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

  constructor(public createMenuService: CreateMenuService) {}

  ngOnInit() {
    this.categorias = this.createMenuService.getSections();
    console.log(this.categorias);
  }


  /**
   * Função que cria o menu do dia
   */
  onCreateMenu() {
    this.createMenuService.createMenu({
      menu: this.menu,
      additionalSections: [this.menu[6], this.menu[7]]
    });

  }

}

