import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';
import { FormControl } from '@angular/forms';
import { MenuService } from '../menu.service';
import { NgForm } from '@angular/forms';
import * as cloneDeep from 'lodash.clonedeep'; //essa lib faz um clone de arrays de objetos
import {CreateMenuService} from '../../firebase-services/create-menu.service';

@Component({
  selector: 'app-create-menu',
  templateUrl: './create-menu.component.html',
  styleUrls: ['./create-menu.component.css']
})
export class CreateMenuComponent implements OnInit {
  categorias = [];
  itensSelecionados = [];
  // itensSelecionados2 = [];

  //mock do objeto enviado ao criar o menu:
  
  constructor(public menuService: MenuService, public createMenuService: CreateMenuService) {
  }

  ngOnInit() {
    this.categorias = this.createMenuService.getSections();
    this.itensSelecionados = this.createMenuService.getSections();
    console.log(this.itensSelecionados);
    this.itensSelecionados.forEach(categoria => {
      categoria.opcoes = [];
    });
    console.log(this.itensSelecionados);
    console.log();
    console.log(this.itensSelecionados);

    
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
    this.menuService.createMenu(this.itensSelecionados);
    this.createMenuService.createMenu(this.itensSelecionados);
    console.log(this.itensSelecionados);
  }

  // showCategory(category: string) {
  //   this.categorias.forEach(categoria => {
  //     if (categoria.nome === category) {
  //       categoria.selecionada = !categoria.selecionada;
  //     }
  //   });
  // }

}
