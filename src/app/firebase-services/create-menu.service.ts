import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
  })
export class CreateMenuService {
    
    constructor(private db: AngularFirestore){

    }

    /*
        Cria o cardápio do dia do Fulano de Sal (Ver no documento do modelo de dados)
        Obs.: As propriedades "available" e "timestamp" podem ser omitidas na criacao do menu,
        elas sempre sao criadas por padrão no servidor. No caso de available, com valor false.
    */
    createMenu(menu){
        this.db.collection('menu').add(menu)
        .then(res => {
            console.log('Cardapio atualizado com sucesso!');
        })
        .catch(err => {
            console.log('Erro ao atualizar cardapio!');
        })
    }


    /*
        Recupera uma lista de Seções do servidor
    */
    getSections(){
        let sections = []
        this.db.collection('sections').get().toPromise()
        .then(result => {
            result.docs.map(section => {   
                sections.push(section.data())
            })
        })
        .catch(err => {
            sections = []
            console.log(err);
        })
        console.log(sections);
        
        return sections;
    }
}