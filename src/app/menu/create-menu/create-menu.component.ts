import { Component, OnInit, TemplateRef } from '@angular/core';
// import * as $ from 'jquery';
import { MenuService } from '../menu.service';

import {CreateMenuService} from '../../firebase-services/create-menu.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NgForm } from '@angular/forms';
import * as cloneDeep from 'lodash.clonedeep'; //essa lib faz um clone de arrays de objetos
import {CreateMenuService} from '../../firebase-services/create-menu.service';
import { log } from 'util';

@Component({
  selector: 'app-create-menu',
  templateUrl: './create-menu.component.html',
  styleUrls: ['./create-menu.component.css']
})
export class CreateMenuComponent implements OnInit {
  categorias = [];
  createModalRef: BsModalRef;
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
    }
  ];

  constructor(public menuService: MenuService, public createMenuService: CreateMenuService, private modalService: BsModalService) {
  }

  ngOnInit() {
    this.categorias = this.createMenuService.getSections();
    
    console.log(this.categorias);

    //clonando o array de objetos sem lib externa
    /* this.categorias.map(item => {
      this.itensSelecionados2.push(Object.assign({}, item));
      console.log(item);
    });

    //tornando as opcoes do array2 clonado em vazias
    this.itensSelecionados2.map(categoria => {
      categoria.opcoes = [];
    }); */
  }

  onCreateMenu() {
    this.message = 'Pedido criado com sucesso!';
    this.createModalRef.hide();
    
    this.menuService.createMenu(this.itensSelecionados);
    this.createMenuService.createMenu(this.itensSelecionados);
    console.log(this.itensSelecionados);

  }

  openModal(createModal: TemplateRef<any>) {
    this.createModalRef = this.modalService.show(createModal,{class: 'modal-sm'});
  }

  onDeclineCreate() {
    this.createModalRef.hide();
  }

  // showCategory(category: string) {
  //   this.categorias.forEach(categoria => {
  //     if (categoria.nome === category) {
  //       categoria.selecionada = !categoria.selecionada;
  //     }
  //   });
  // }


    // console.log(this.menu);
    this.createMenuService.createMenu({
      menu: this.menu.slice(0, 6),
      additionalSections: [this.menu[6], this.menu[7]]
    });
  }

}
