import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import axios from 'axios';

@Injectable({
    providedIn: 'root'
  })

  export class ReportService {
      constructor(private db: AngularFirestore) {
    }


    // Exemplo de como recuperar os dados para construir o relatório.
    ExampleGetReport() {
        this.getReportFromDb().then(res => {
            console.log(res);
            // Outros tratamentos com os dados do relatório
        });
    }

    /*
        Função que retorna uma promise que quando estiver "preenchida", terá os dados necessários
        para construir o relatório. Exemplo de uso na funcao acima ^.
        Retorna, no callback de sucesso,
        o item como chave e o valor é o numero de porções pedidas no dia.
        {'Feijão Verde': 3, 'Arroz': 5}
    */
    async getReportFromDb() {
        let response;
        const BASE_URL = 'https://us-central1-pwa-fulano-de-sal-51556.cloudfunctions.net/getReport';
        return await axios.get(BASE_URL).then((res) => {
            response = res.data;
            return res.data;
        });
    }
}
