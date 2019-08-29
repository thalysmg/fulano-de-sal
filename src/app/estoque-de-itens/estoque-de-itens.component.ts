import { Component, OnInit } from '@angular/core';
import { ItemService } from '../firebase-services/items.service';


export class App {
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

  feijao: App = new App();
  tiposFeijao: App[] = [];

  arroz: App = new App();
  tiposArroz: App[] = [];

  macarrao: App = new App();
  tiposMacarrao: App[] = [];

  carne: App = new App();
  tiposCarne: App[] = [];

  acompanhamento: App = new App();
  tiposAcompanhamento: App[] = [];

  salada: App = new App();
  tiposSalada: App[] = [];

  entrega: App = new App();
  locaisEntrega: App[] = [];

  bebida: App = new App();
  tiposBebida: App[] = [];

  sobremesa: App = new App();
  tiposSobremesa: App[] = [];

  title = 'cardapio';
  ngOnInit() {

  }

  saveFeijao(feijao: App){
    this.tiposFeijao.push(feijao);
    this.feijao = new App();
    this.tiposFeijao = Object.assign([], this.tiposFeijao);
    this.itemService.addItem('Feijão', { name: feijao.desc });
  }

  deleteFeijao(feijao: App){
    this.tiposFeijao.splice(this.tiposFeijao.indexOf(feijao), 1);
    this.itemService.removeItem('Feijão', feijao.desc);
  }

  saveArroz(arroz: App){
      this.tiposArroz.push(arroz);
      this.arroz = new App();
      this.tiposArroz = Object.assign([], this.tiposArroz);
      this.itemService.addItem('Arroz', { name: arroz.desc });
  }

  deleteArroz(arroz: App){
      this.tiposArroz.splice(this.tiposArroz.indexOf(arroz), 1);
      this.itemService.removeItem('Arroz', arroz.desc);
  }

  saveMacarrao(macarrao: App){
      this.tiposMacarrao.push(macarrao);
      this.macarrao = new App();
      this.tiposMacarrao = Object.assign([], this.tiposMacarrao);
      this.itemService.addItem('Macarrão', { name: macarrao.desc });
  }

  deleteMacarrao(macarrao: App){
      this.tiposMacarrao.splice(this.tiposMacarrao.indexOf(macarrao), 1);
      this.itemService.removeItem('Macarrão', macarrao.desc);
  }

  saveCarne(carne: App){
      this.tiposCarne.push(carne);
      this.carne = new App();
      this.tiposCarne = Object.assign([], this.tiposCarne);
      this.itemService.addItem('Carne', { name: carne.desc });
  }

  deleteCarne(carne: App) {
      this.tiposCarne.splice(this.tiposCarne.indexOf(carne), 1);
      this.itemService.removeItem('Carne', carne.desc);
  }

  saveAcompanhamento(acompanhamento: App) {
      this.tiposAcompanhamento.push(acompanhamento);
      this.acompanhamento = new App();
      this.tiposAcompanhamento = Object.assign([], this.tiposAcompanhamento);
      this.itemService.addItem('Acompanhamentos', { name: acompanhamento.desc });
  }

  deleteAcompanhamento(acompanhamento: App) {
      this.tiposAcompanhamento.splice(this.tiposAcompanhamento.indexOf(acompanhamento), 1);
      this.itemService.removeItem('Acompanhamentos', acompanhamento.desc);
  }

  saveSalada(salada: App) {
      this.tiposSalada.push(salada);
      this.salada = new App();
      this.tiposSalada = Object.assign([], this.tiposSalada);
      this.itemService.addItem('Saladas', { name: salada.desc });
  }

  deleteSalada(salada: App) {
      this.tiposSalada.splice(this.tiposSalada.indexOf(salada), 1);
      this.itemService.removeItem('Saladas', salada.desc);
  }

  saveEntrega(entrega: App) {
      this.locaisEntrega.push(entrega);
      this.entrega = new App();
      this.locaisEntrega = Object.assign([], this.locaisEntrega);
      this.itemService.addItem("Local de Entrega", entrega.desc);
  }

  deleteEntrega(entrega: App) {
      this.locaisEntrega.splice(this.locaisEntrega.indexOf(entrega), 1);
      this.itemService.removeItem("Local de Entrega", this.entrega.desc);
  }

  itemBebida() {
    this.bebida.name = (document.getElementById('nameBebida') as HTMLInputElement).value;
    this.bebida.price = (document.getElementById('priceBebida') as HTMLInputElement).value;
    this.saveBebida(this.bebida, this.bebida.name, this.bebida.price);
  }
  saveBebida(bebida: App, name, price) {
      this.tiposBebida.push(bebida);
      this.bebida = new App();
      this.tiposBebida = Object.assign([], this.tiposBebida);
      this.itemService.addItem('Bebidas', {name, price});
  }

  deleteBebida(bebida: App){
      this.tiposBebida.splice(this.locaisEntrega.indexOf(bebida),1);
      this.itemService.removeItem('Bebidas', bebida.name);
  }

  itemSobremesa() {
    this.sobremesa.name = (document.getElementById('nameSobremesa') as HTMLInputElement).value;
    this.sobremesa.price = (document.getElementById('priceSobremesa') as HTMLInputElement).value;
    this.saveSobremesa(this.sobremesa, this.sobremesa.name, this.sobremesa.price);
  }

  saveSobremesa(sobremesa: App, name, price) {
      this.tiposSobremesa.push(sobremesa);
      this.sobremesa = new App();
      this.tiposSobremesa = Object.assign([], this.tiposSobremesa);
      this.itemService.addItem('Sobremesas', {name, price});
  }

  deleteSobremesa(sobremesa: App) {
      this.tiposSobremesa.splice(this.locaisEntrega.indexOf(sobremesa), 1);
      this.itemService.removeItem('Sobremesas', sobremesa.name);
  }
}
