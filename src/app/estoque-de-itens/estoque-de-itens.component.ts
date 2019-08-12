import { Component, OnInit } from '@angular/core';
import { ItemService } from '../firebase-services/items.service'; 


export class App{
  desc: string;
}

@Component({
  selector: 'app-estoque-de-itens',
  templateUrl: './estoque-de-itens.component.html',
  styleUrls: ['./estoque-de-itens.component.css']
})

export class EstoqueDeItensComponent implements OnInit {

 
  constructor(private itemService: ItemService) { }
  ngOnInit() {

  } 

  feijao: App = new App();
  tiposFeijao: App[] = [];

  saveFeijao(feijao: App){
    this.tiposFeijao.push(feijao);
    this.feijao = new App();
    this.tiposFeijao = Object.assign([], this.tiposFeijao)
    this.itemService.addItem("Feijão",feijao.desc);
  }

  deleteFeijao(feijao: App){
    this.tiposFeijao.splice(this.tiposFeijao.indexOf(feijao),1)
    this.itemService.removeItem("Feijão", feijao.desc)
  }

  arroz: App = new App();
  tiposArroz: App[] = [];

  saveArroz(arroz: App){
      this.tiposArroz.push(arroz);
      this.arroz = new App();
      this.tiposArroz = Object.assign([], this.tiposArroz)
      this.itemService.addItem("Arroz",arroz.desc);
  }
  
  deleteArroz(arroz: App){
      this.tiposArroz.splice(this.tiposArroz.indexOf(arroz),1)
      this.itemService.removeItem("Arroz",arroz.desc)
  }

  macarrao: App = new App();
  tiposMacarrao: App[] = [];

  saveMacarrao(macarrao: App){
      this.tiposMacarrao.push(macarrao);
      this.macarrao = new App();
      this.tiposMacarrao = Object.assign([], this.tiposMacarrao)
      this.itemService.addItem("Macarrão", macarrao.desc);
  }
  
  deleteMacarrao(macarrao: App){
      this.tiposMacarrao.splice(this.tiposMacarrao.indexOf(macarrao),1)
      this.itemService.removeItem("Macarrão", macarrao.desc)
  }

  carne: App = new App();
  tiposCarne: App[] = [];

  saveCarne(carne: App){
      this.tiposCarne.push(carne);
      this.carne = new App();
      this.tiposCarne = Object.assign([], this.tiposCarne)
      this.itemService.addItem("Carne", carne.desc);
  }
  
  deleteCarne(carne: App){
      this.tiposCarne.splice(this.tiposCarne.indexOf(carne),1)
      this.itemService.removeItem("Carne", carne.desc)
  }

  acompanhamento: App = new App();
  tiposAcompanhamento: App[] = [];

  saveAcompanhamento(acompanhamento: App){
      this.tiposAcompanhamento.push(acompanhamento);
      this.acompanhamento = new App();
      this.tiposAcompanhamento = Object.assign([], this.tiposAcompanhamento)
      this.itemService.addItem("Acompanhamentos", acompanhamento.desc);
  }
  
  deleteAcompanhamento(acompanhamento: App){
      this.tiposAcompanhamento.splice(this.tiposAcompanhamento.indexOf(acompanhamento),1)
      this.itemService.removeItem("Acompanhamentos",acompanhamento.desc)
  }

  salada: App = new App();
  tiposSalada: App[] = [];

  saveSalada(salada: App){
      this.tiposSalada.push(salada);
      this.salada = new App();
      this.tiposSalada = Object.assign([], this.tiposSalada)
      this.itemService.addItem("Saladas", salada.desc);
  }
  
  deleteSalada(salada: App){
      this.tiposSalada.splice(this.tiposSalada.indexOf(salada),1)
      this.itemService.removeItem("Saladas",this.salada.desc)
  }

  entrega: App = new App();
  locaisEntrega: App[] = [];

  saveEntrega(entrega: App){
      this.locaisEntrega.push(entrega);
      this.entrega = new App();
      this.locaisEntrega = Object.assign([], this.locaisEntrega)
      this.itemService.addItem("Local de Entrega", entrega.desc);
  }
  
  deleteEntrega(entrega: App){
      this.locaisEntrega.splice(this.locaisEntrega.indexOf(entrega),1)
      this.itemService.removeItem("Local de Entrega", this.entrega.desc);
  }

  bebida: App = new App();
  tiposBebida: App[] = [];

  saveBebida(bebida: App){
      this.tiposBebida.push(bebida);
      this.bebida = new App();
      this.tiposBebida = Object.assign([], this.tiposBebida)
      this.itemService.addItem("Bebidas", bebida.desc);
  }
  
  deleteBebida(bebida: App){
      this.tiposBebida.splice(this.locaisEntrega.indexOf(bebida),1)
      this.itemService.removeItem("Bebidas", this.bebida.desc);
  }
  
  sobremesa: App = new App();
  tiposSobremesa: App[] = [];

  saveSobremesa(sobremesa: App){
      this.tiposSobremesa.push(sobremesa);
      this.sobremesa = new App();
      this.tiposSobremesa = Object.assign([], this.tiposSobremesa)
      this.itemService.addItem("Sobremesas", sobremesa.desc);
  }
  
  deleteSobremesa(sobremesa: App){
      this.tiposSobremesa.splice(this.locaisEntrega.indexOf(sobremesa),1)
      this.itemService.removeItem("Sobremesas", this.sobremesa.desc);
  }

  title = 'cardapio';




}
