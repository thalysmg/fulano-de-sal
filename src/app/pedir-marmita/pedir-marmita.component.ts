import { Component, OnInit } from '@angular/core';
import { OrderService } from '../firebase-services/orderService.service';
import { log } from 'util';
import { MessagingService } from '../firebase-services/messaging.service';

@Component({
  selector: 'app-pedir-marmita',
  templateUrl: './pedir-marmita.component.html',
  styleUrls: ['./pedir-marmita.component.css']
})
export class PedirMarmitaComponent implements OnInit {

  menu = [];
  order = {
    authorEmail: 'thalys@mail',
    authorName: 'Thalys',
    authorPhoneNumber: '83987523433',
    basePrice: 10.5,
    deliveryPlace: 'Rua José de Alencar, 263, Prata, Ap 401',
    orderItens: []
  };

  menuAppeared = false;
  pedidoValido = true;

  constructor(public orderService: OrderService, private messagingService: MessagingService) { }

  ngOnInit() {
    this.menu = this.orderService.getMenu(1);
    // console.log(this.menu[0].menu);


    //Notificacoes
    this.messagingService.requestPermission(localStorage.getItem('uid'))
  }

  ngDoCheck() {
    this.validateSelectedOptions();
  }

  ngAfterViewChecked() {
    if (this.menu[0] !== undefined && this.menuAppeared === false) {
      console.log(this.menu[0]);
      this.menuAppeared = true;
    }
  }

  /**
   * Método para criar um pedido e enviar para o db
   */

  onMakeOrder() {
    console.log(this.order.orderItens);
    console.log(this.pedidoValido);
    if (this.order.orderItens[6] !== undefined && this.order.orderItens[6].length) {
      this.addDrinkCostToOrder();
    }
    if (this.order.orderItens[7] !== undefined && this.order.orderItens[7].length > 0) {
      this.addDesertCostToOrder();
    }
  }

  /**
   * Método que verifica se a quantidade de itens
   * selecionados em cada seção está dentro do limite
   * estabelecido pelo ADM.
   * Caso ultrapasse o limite, o botão 'realizar' pedido
   * é desativado.
   */

  validateSelectedOptions() {
    const orderItensSize = this.order.orderItens.length;
    for (let i = 0; i < orderItensSize; i++) {
      if (this.order.orderItens[i] !== undefined && this.order.orderItens[i].length > this.menu[0].menu[i].maxChoices) {
        this.pedidoValido = false;
      } else {
        this.pedidoValido = true;
      }
      // console.log(this.order.orderItens[i])
    }
  }
  addDrinkCostToOrder() {
    let valorBebidas = 0;
    this.order.orderItens[6].forEach(bebida => {
      valorBebidas += bebida.unitPrice;
    });
    this.order.basePrice += valorBebidas;
  }

  addDesertCostToOrder() {
    let valorSobremesas = 0;
    this.order.orderItens[7].forEach(sobremesa => {
      valorSobremesas += sobremesa.unitPrice;
    });
    this.order.basePrice += valorSobremesas;
  }
}
