import { Component, OnInit } from '@angular/core';
import { ReportService } from '../firebase-services/report.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-relatorio-mensal',
  templateUrl: './relatorio-mensal.component.html',
  styleUrls: ['./relatorio-mensal.component.css']
})
export class RelatorioMensalComponent implements OnInit {

  relatorio = [];

  constructor(private reportService: ReportService, private location: Location) { }

  ngOnInit() {
    this.reportService.getMonthlyReportFromDb().then(res => {

      const relatorioObj = Object.entries(res); //convertendo objeto num array no formato: [[key0, value0], [key1, value1]]
      console.log(relatorioObj);

      for (const item of relatorioObj ) {
        this.relatorio.push({ nome: item[0], quantidade: item[1] });
      }
      console.log(this.relatorio);

      if (this.relatorio.length) {
        // this.relatorio.sort(this.compareValues('quantidade', 'desc'));
        this.relatorio = this.relatorio.sort((a, b) => {
          return b.quantidade - a.quantidade; //desse modo a ordenação é decrescente
        });
      }
    });
  }
  goToPreviousPage() {
    this.location.back();
  }
  // compareValues(key, order= 'asc') {
  //   return (a, b) => {
  //     if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
  //       return 0;
  //     }

  //     const varA = a[key];
  //     const varB = b[key];

  //     let comparison = 0;

  //     if (varA >= varB) {
  //       comparison = 1;
  //     } else if (varA < varB) {
  //       comparison = -1;
  //     }
  //     return (
  //       (order === 'desc') ? (comparison * -1) : comparison
  //     );
  //   };
  // }
}
