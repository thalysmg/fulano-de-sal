import { Component, OnInit, NgZone } from '@angular/core';
import { OrderService } from '../firebase-services/orderService.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { log } from 'util';
import { MessagingService } from '../firebase-services/messaging.service';
import { Location } from '@angular/common';

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

  menu = {
    available: true,
    menu: [],
    additionalSections: []
  };

  order = {
    authorEmail: '',
    authorName: '',
    authorPhoneNumber: '',
    basePrice: 5.0,
    orderItens: [
      {secao: 'Feijão', itens: []},
      {secao: 'Arroz', itens: []},
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
  secoesValidas = [1, 1, 1, 1, 1, 1, 1, 1, 1];
  pedidoValido = true;
  localSelecionado = false;
  showModal = false;

  constructor(private messagingService: MessagingService, private ngZone: NgZone, private orderService: OrderService, private db: AngularFirestore, private location: Location) { }


  ngOnInit() {
    //Notificacoes
    this.messagingService.requestPermission(localStorage.getItem('uid'));

    this.db.collection('menu').ref.orderBy('timestamp', 'desc').limit(1).get()
    .then(result => {
      result.docs.map(doc => {
        this.ngZone.run(() => {
          this.menu = doc.data() as {menu: [], additionalSections: [], available: boolean};
        });
        console.log(this.menu);
      });
      this.validateSelectedOptions(8);
    })
    .catch(err => {
      console.log('Erro ao recuperar o cardápio do dia');
      console.log(err);
    });
    if (localStorage.getItem('uid') !== null) {
      this.getUserInfo(localStorage.getItem('uid'));
    } else {
      this.order.authorName = localStorage.getItem('username');
      this.order.authorPhoneNumber = localStorage.getItem('phoneNumber');
    }
  }

  displayModal() {
    this.showModal = !this.showModal;
  }

  /**
   * Função que cria um pedido e envia para o DB
   * Chama a função para acrescentar o valor das bebidas/sobremesas selecionadas
   */
  onMakeOrder() {
    console.log(this.order.authorName);

    if (!this.order.authorName || !this.order.authorPhoneNumber) {
      alert('Não é possível realizar o pedido sem nome e telefone');
      return;
    }
    console.log(this.order);
    // console.log(this.secoesValidas);
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
   * hora de montar o cardápio, secoesValidas é false, o que impossibiita de fazer o pedido, deixando o botão desativado).
   * Essa função é chamada no select, com a classe que emite eventos "selectionChange"
   * @param i índice da categoria a ser checada
   */
  validateSelectedOptions(i: number) {
    if (this.order.orderItens[i].itens !== undefined && this.order.orderItens[i].itens.length > this.menu.menu[i].maxChoices) {
      this.secoesValidas[i] = 0;
    } else {
      this.secoesValidas[i] = 1;
    }

    //Esse código verifica se há um local selecionado. Caso não haja, não é possível fazer o pedido
    if (!this.order.orderItens[8].itens.length) {
      this.secoesValidas[8] = 0;
      this.localSelecionado = false;
    } else {
      this.localSelecionado = true;
    }

    this.pedidoValido = !this.secoesValidas.includes(0);
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
      console.log(this.order);

    })
    .catch(err => {
      console.log(err);
    });
  }

  goToPreviousPage() {
    this.location.back();
  }

}


