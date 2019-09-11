import { Component, OnInit } from '@angular/core';
import { OrderService } from '../firebase-services/orderService.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { log } from 'util';

@Component({
  selector: 'app-pedir-marmita',
  templateUrl: './pedir-marmita.component.html',
  styleUrls: ['./pedir-marmita.component.css']
})
export class PedirMarmitaComponent implements OnInit {

  userInfo = {
    username: '',
    email: '',
    phoneNumber: '',
    photoUrl: '',
    roles: []
  };

  menu = [];

  order = {
    authorEmail: '',
    authorName: '',
    authorPhoneNumber: '',
    basePrice: 5.0,
    orderItens: [
      {secao: 'Arroz', itens: []},
      {secao: 'Feijão', itens: []},
      {secao: 'Macarrão', itens: []},
      {secao: 'Carne', itens: []},
      {secao: 'Salada', itens: []},
      {secao: 'Acompanhamentos', itens: []},
      {secao: 'Bebida', itens: []},
      {secao: 'Sobremesa', itens: []},
      {secao: 'Local', itens: []}
    ],
    comment: ''
  };

  menuAppeared = false;
  pedidoValido = true;

  constructor(private orderService: OrderService, private db: AngularFirestore) { }

  ngOnInit() {
    this.menu = this.orderService.getMenu(1);
    // console.log(this.menu[0].menu);

    this.getUserInfo(localStorage.getItem('uid'));

  }

  /**
   * Função que faz parte do ciclo de vida de um componente angular
   * É executada apenas quando a view foi toda carregada e checada
   */
  ngAfterViewChecked() {
    if (this.menu[0] !== undefined && this.menuAppeared === false) {
      console.log(this.menu[0]);
      this.menuAppeared = true;
    }
  }

  /**
   * Função que cria um pedido e envia para o DB
   * Chama a função para acrescentar o valor das bebidas/sobremesas selecionadas
   */
  onMakeOrder() {
    console.log(this.order);
    console.log(this.pedidoValido);
    if (this.order.orderItens[6].itens !== undefined && this.order.orderItens[6].itens.length) {
      this.addCostToOrder('bebida');
    }
    if (this.order.orderItens[7].itens !== undefined && this.order.orderItens[7].itens.length) {
      this.addCostToOrder('sobremesa');
    }
    this.orderService.createOrder(this.order);
  }

  /**
   * Função que valida o pedido (se a quantidade de itens selecionados da categoria no índice i
   * for maior que a quantidade máxima definida pelo admin na
   * hora de montar o cardápio, pedidoValido é false, o que impossibiita de fazer o pedido, deixando o botão desativado).
   * Essa função é chamada no select, com a classe que emite eventos "selectionChange"
   * @param i índice da categoria a ser checada
   */
  validateSelectedOptions(i: number) {
    if (this.order.orderItens[i].itens !== undefined && this.order.orderItens[i].itens.length > this.menu[0].menu[i].maxChoices) {
      this.pedidoValido = false;
    } else {
      this.pedidoValido = true;
    }
  }

  /**
   * Função para acrescentar o custo extra de bebidas e/ou sobremesas adicionadas no preço do pedido
   * @param opcao Pode ser 'bebida' ou 'sobremesa'
   */
  addCostToOrder(opcao: string) {
    let valorExtra = 0;
    if (opcao === 'bebida' && this.order.orderItens[6].itens.length) {
      this.order.orderItens[6].itens.forEach(bebida => {
        valorExtra += bebida.unitPrice;
      });
      this.order.basePrice += valorExtra;

    } else if (opcao === 'sobremesa' && this.order.orderItens[7].itens.length) {
      this.order.orderItens[7].itens.forEach(sobremesa => {
        valorExtra += sobremesa.unitPrice;
      });
      this.order.basePrice += valorExtra;
    }
  }
  /**
   * Essa função retorna um usuário do banco de dados através do seu id
   * @param id id do usuário
   */
  getUserInfo(id) {
    this.db.collection('users').doc(id).get().toPromise().then((res) => {
      this.userInfo = res.data() as {
        username: string,
        email: string,
        phoneNumber: string,
        photoUrl: string,
        roles: []
      };
      this.order.authorEmail = this.userInfo.email;
      this.order.authorName = this.userInfo.username;
      this.order.authorPhoneNumber = this.userInfo.phoneNumber;
    })
    .catch(err => {
      console.log(err);
    });
  }
}


