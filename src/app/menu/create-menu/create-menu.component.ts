import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';
import { FormControl } from '@angular/forms';
import { MenuService } from '../menu.service';
import { NgForm } from '@angular/forms';
import * as cloneDeep from 'lodash.clonedeep';

@Component({
  selector: 'app-create-menu',
  templateUrl: './create-menu.component.html',
  styleUrls: ['./create-menu.component.css']
})
export class CreateMenuComponent implements OnInit {
  categorias = [
    {
      "id":1,
      "nome":"Feijão",
      "opcoes": ["Carioca", "Preto", "Verde", "Macassa"]
    },
    {
      "id":2,
      "nome":"Arroz",
      "opcoes": ["Branco", "Refogado", "Integral"]
    },
    {
      "id":3,
      "nome":"Macarrão",
      "opcoes": ["Alho e Óleo", "Molho de tomate", "Manteiga e cebola", "Molho branco"]
    },
    {
      "id":4,
      "nome":"Carne",
      "opcoes": ["Bisteca/porco", "Carne de sol", "Peito de frango", "Coxa de frango"]
    },
    {
      "id":5,
      "nome":"Acompanhamentos",
      "opcoes": ["Purê", "Farofa", "Vinagrete", "Batata frita"]
    },
    {
      "id":6,
      "nome":"Salada",
      "opcoes": ["Alface", "Tomate", "Rúcula", "Repolho"]
    }
  ];

  itensSelecionados = cloneDeep(this.categorias); //essa lib faz um clone de arrays de objetos
  // itensSelecionados2 = [];

  constructor(public menuService: MenuService) {
  }

  ngOnInit() {
    //tornando as opcoes do array clonado em vazias
    this.itensSelecionados.forEach(categoria => {
      categoria.opcoes = [];
    });

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
  }

  // showCategory(category: string) {
  //   this.categorias.forEach(categoria => {
  //     if (categoria.nome === category) {
  //       categoria.selecionada = !categoria.selecionada;
  //     }
  //   });
  // }

}
