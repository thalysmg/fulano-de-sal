import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-menu',
  templateUrl: './create-menu.component.html',
  styleUrls: ['./create-menu.component.css']
})
export class CreateMenuComponent implements OnInit {
  feijao = "";
  arroz = "";
  macarrao = "";
  carne = "";
  acomp = "";
  salada = "";


  categorias = [
    {
      "id":1,
      "nome":"Feijão",
      "opcoes": ["Carioca", "Preto", "Verde", "Macassa"],
      "selecionada": false
    },
    {
      "id":2,
      "nome":"Arroz",
      "opcoes": ["Branco", "Refogado", "Integral"],
      "selecionada": false
    },
    {
      "id":3,
      "nome":"Macarrão",
      "opcoes": ["Alho e Óleo", "Molho de tomate", "Manteiga e cebola", "Molho branco"],
      "selecionada": false
    },
    {
      "id":4,
      "nome":"Carne",
      "opcoes": ["Bisteca/porco", "Carne de sol", "Peito de frango", "Coxa de frango"],
      "selecionada": false
    },
    {
      "id":5,
      "nome":"Acompanhamentos",
      "opcoes": ["Purê", "Farofa", "Vinagrete", "Batata frita"],
      "selecionada": false
    },
    {
      "id":6,
      "nome":"Salada",
      "opcoes": ["Alface", "Tomate", "Rúcula", "Repolho"],
      "selecionada": false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  showCategory(category: string) {
    this.categorias.forEach(categoria => {
      if (categoria.nome === category) {
        categoria.selecionada = !categoria.selecionada;
      }
    });
  }

}
