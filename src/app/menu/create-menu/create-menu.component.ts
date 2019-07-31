import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';
import { FormControl } from '@angular/forms';
import { MenuService } from '../menu.service';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-create-menu',
  templateUrl: './create-menu.component.html',
  styleUrls: ['./create-menu.component.css']
})
export class CreateMenuComponent implements OnInit {
  // feijao = "";
  // arroz = "";
  // macarrao = "";
  // carne = "";
  // acomp = "";
  // salada = "";

  opcEscolhidas = [];

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

  public menuService;

  constructor(menuService: MenuService) { 
    this.menuService = menuService;
  }

  ngOnInit() {
  }

  onCreateMenu(form: NgForm) {
    this.menuService.createMenu(form);
  }

  // showCategory(category: string) {
  //   this.categorias.forEach(categoria => {
  //     if (categoria.nome === category) {
  //       categoria.selecionada = !categoria.selecionada;
  //     }
  //   });
  // }

}
