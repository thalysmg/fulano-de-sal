import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
    providedIn: 'root'
  })

  export class AddItemsService{
      constructor(private db: AngularFirestore){
    }

    
    sectionNames = {
        Carne: "Carne",
        Macarrao: "Macarrão",
        Feijao: "Feijão",
        Arroz: "Arroz",
        Acompanhamentos: "Acompanhamentos",
        Bebidas: "Bebidas",
        Sobremesas: "Sobremesas",
        Saladas: "Saladas",
        LocaldeEntrega: "Local de Entrega"
    }

    /*
        Adiciona um item ('item') em uma seção com determinado nome ('sectionName')
        *Prefira usar o objeto sectionNames para os nomes das seções
    */
    addItem(sectionName, item){
        var currentItems;
        var docRef = this.db.collection('sections').doc(sectionName);
        docRef.get()
        .toPromise()
        .then(doc => {
            currentItems = doc.data().opcoes;
            currentItems.push(item)
            this.db.collection('sections').doc(sectionName).update({
                opcoes: currentItems
            })
            .then(() => {
                console.log('Seção atualizada com sucesso');
            })
            .catch(err => {
                console.log('Erro ao atualizar a seção: ' + sectionName);
                console.log(err);          
            })      
        })
        .catch(err => {
            console.log('Erro ao recuperar os itens atuais da seção ' + sectionName);
            console.log(err);
            
        })

    }


}