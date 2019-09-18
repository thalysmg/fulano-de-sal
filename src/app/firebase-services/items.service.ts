import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})

export class ItemService {
  constructor(private db: AngularFirestore) {}

  sectionNames = {
    Carne: 'Carne',
    Macarrao: 'Macarrão',
    Feijao: 'Feijão',
    Arroz: 'Arroz',
    Acompanhamentos: 'Acompanhamentos',
    Bebidas: 'Bebidas',
    Sobremesas: 'Sobremesas',
    Saladas: 'Saladas',
    LocaldeEntrega: 'Local de Entrega'
  };

  /*
      Adiciona um item de determinado nome ('item: {name: String, price?: Number}')
      em uma seção com determinado nome ('sectionName: String').
      Se a seção for de bebidas/sobremesas, o item deve ter um preço associado,
      caso não tenha, o preço associado será R$ 0.00.

      *Prefira usar o objeto sectionNames para os nomes das seções
  */
  addItem(sectionName, item) {
    let currentItems;
    const docRef = this.db.collection('sections').doc(sectionName);
    docRef.get()
    .toPromise()
    .then(doc => {
        currentItems = doc.data().opcoes;
        currentItems.push(item);
        this.db.collection('sections').doc(sectionName).update({
            opcoes: currentItems
        })
        .then(() => {
            console.log('Seção atualizada com sucesso');
        })
        .catch(err => {
            console.log('Erro ao atualizar a seção: ' + sectionName);
            console.log(err);
        });
    })
    .catch(err => {
        console.log('Erro ao recuperar os itens atuais da seção ' + sectionName);
        console.log(err);
    });
  }

  removeItem(sectionName, itemName) {
    this.db.collection('sections').doc(sectionName)
    .get()
    .toPromise()
    .then(doc => {
        let currentItems = doc.data().opcoes;
        currentItems = currentItems.filter((opcao) => {
            return opcao.name != itemName;
        });
        this.db.collection('sections').doc(sectionName).update({
            opcoes: currentItems
        })
        .then(() => {
            console.log('Itens atualizados com sucesso');
        })
        .catch(err => {
            console.log('Não foi possível remover o item.');
            console.log(err);
        });
    }).catch(err => {
        console.log('Ocorreu um erro ao recuperar os itens do db');
        console.log(err);
    });
  }
}
