import { Component, OnInit } from '@angular/core';
import { ItemService } from '../firebase-services/items.service'; 


export class App{
  desc: string;
  name: string;
  price: string;
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

  itemFeijao(){
    this.feijao.name = (<HTMLInputElement>document.getElementById('feijao')).value;
    this.saveFeijao(this.feijao, this.feijao.name);
  }

  saveFeijao(feijao: App,name){
    this.tiposFeijao.push(feijao);
    this.feijao = new App();
    this.tiposFeijao = Object.assign([], this.tiposFeijao)
    this.itemService.addItem("Feijão",{name:feijao.name});
  }

  deleteFeijao(feijao: App){
    this.tiposFeijao.splice(this.tiposFeijao.indexOf(feijao),1)
    this.itemService.removeItem("Feijão", feijao.name)
  }

  arroz: App = new App();
  tiposArroz: App[] = [];

  itemArroz(){
    this.arroz.name = (<HTMLInputElement>document.getElementById('arroz')).value;
    this.saveArroz(this.arroz, this.arroz.name);
  }

  saveArroz(arroz: App,name){
      this.tiposArroz.push(arroz);
      this.arroz = new App();
      this.tiposArroz = Object.assign([], this.tiposArroz)
      this.itemService.addItem("Arroz",{name:arroz.name});
  }
  
  deleteArroz(arroz: App){
      this.tiposArroz.splice(this.tiposArroz.indexOf(arroz),1)
      this.itemService.removeItem("Arroz", arroz.name)
  }

  macarrao: App = new App();
  tiposMacarrao: App[] = [];

  itemMacarrao(){
    this.macarrao.name = (<HTMLInputElement>document.getElementById('macarrao')).value;
    this.saveMacarrao(this.macarrao, this.macarrao.name);
  }

  saveMacarrao(macarrao: App,name){
      this.tiposMacarrao.push(macarrao);
      this.macarrao = new App();
      this.tiposMacarrao = Object.assign([], this.tiposMacarrao)
      this.itemService.addItem("Macarrão", {name:macarrao.name});
  }
  
  deleteMacarrao(macarrao: App){
      this.tiposMacarrao.splice(this.tiposMacarrao.indexOf(macarrao),1)
      this.itemService.removeItem("Macarrão", macarrao.name)
  }

  carne: App = new App();
  tiposCarne: App[] = [];

  itemCarne(){
    this.carne.name = (<HTMLInputElement>document.getElementById('carne')).value;
    this.saveCarne(this.carne, this.carne.name);
  }

  saveCarne(carne: App, name){
      this.tiposCarne.push(carne);
      this.carne = new App();
      this.tiposCarne = Object.assign([], this.tiposCarne)
      this.itemService.addItem("Carne", {name:carne.name});
  }
  
  deleteCarne(carne: App){
      this.tiposCarne.splice(this.tiposCarne.indexOf(carne),1)
      this.itemService.removeItem("Carne", carne.name)
  }

  acompanhamento: App = new App();
  tiposAcompanhamento: App[] = [];

  itemAcompanhamento(){
    this.acompanhamento.name = (<HTMLInputElement>document.getElementById('acompanhamento')).value;
    this.saveAcompanhamento(this.acompanhamento, this.acompanhamento.name);
  }

  saveAcompanhamento(acompanhamento: App,name){
      this.tiposAcompanhamento.push(acompanhamento);
      this.acompanhamento = new App();
      this.tiposAcompanhamento = Object.assign([], this.tiposAcompanhamento)
      this.itemService.addItem("Acompanhamentos", {name:acompanhamento.name});
  }
  
  deleteAcompanhamento(acompanhamento: App){
      this.tiposAcompanhamento.splice(this.tiposAcompanhamento.indexOf(acompanhamento),1)
      this.itemService.removeItem("Acompanhamentos",acompanhamento.name)
  }

  salada: App = new App();
  tiposSalada: App[] = [];

  itemSalada(){
    this.salada.name = (<HTMLInputElement>document.getElementById('salada')).value;
    this.saveSalada(this.salada, this.salada.name);
  }

  saveSalada(salada: App,name){
      this.tiposSalada.push(salada);
      this.salada = new App();
      this.tiposSalada = Object.assign([], this.tiposSalada)
      this.itemService.addItem("Saladas", {name:salada.name});
  }
  
  deleteSalada(salada: App){
      this.tiposSalada.splice(this.tiposSalada.indexOf(salada),1)
      this.itemService.removeItem("Saladas",salada.name)
  }

  entrega: App = new App();
  locaisEntrega: App[] = [];

  itemEntrega(){
    this.entrega.name = (<HTMLInputElement>document.getElementById('entrega')).value;
    this.saveEntrega(this.entrega, this.entrega.name);
  }

  saveEntrega(entrega: App,name){
      this.locaisEntrega.push(entrega);
      this.entrega = new App();
      this.locaisEntrega = Object.assign([], this.locaisEntrega)
      this.itemService.addItem("Local de Entrega", {name:entrega.name});
  }
  
  deleteEntrega(entrega: App){
      this.locaisEntrega.splice(this.locaisEntrega.indexOf(entrega),1)
      this.itemService.removeItem("Local de Entrega", entrega.name)
  }

  bebida: App = new App();
  tiposBebida: App[] = [];

  itemBebida(){
    this.bebida.name = (<HTMLInputElement>document.getElementById('nameBebida')).value;
    this.bebida.price = (<HTMLInputElement>document.getElementById('priceBebida')).value;
    this.saveBebida(this.bebida,this.bebida.name, this.bebida.price);
  }
  saveBebida(bebida: App, name, price){
      this.tiposBebida.push(bebida);
      this.bebida = new App();
      this.tiposBebida = Object.assign([], this.tiposBebida)
      this.itemService.addItem("Bebidas", {name,price});
  }
  
  deleteBebida(bebida: App){
      this.tiposBebida.splice(this.locaisEntrega.indexOf(bebida),1)
      this.itemService.removeItem("Bebidas", bebida.name);
  }
  
  sobremesa: App = new App();
  tiposSobremesa: App[] = [];

  itemSobremesa(){
    this.sobremesa.name = (<HTMLInputElement>document.getElementById('nameSobremesa')).value;
    this.sobremesa.price = (<HTMLInputElement>document.getElementById('priceSobremesa')).value;
    this.saveSobremesa(this.sobremesa,this.sobremesa.name, this.sobremesa.price);
  }

  saveSobremesa(sobremesa: App,name, price){
      this.tiposSobremesa.push(sobremesa);
      this.sobremesa = new App();
      this.tiposSobremesa = Object.assign([], this.tiposSobremesa)
      this.itemService.addItem("Sobremesas", {name,price});
  }
  
  deleteSobremesa(sobremesa: App){
      this.tiposSobremesa.splice(this.locaisEntrega.indexOf(sobremesa),1)
      this.itemService.removeItem("Sobremesas", sobremesa.name);
  }
  
  title = 'cardapio';
}
