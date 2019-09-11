import { Component, OnInit } from '@angular/core';
import { ReportService } from '../firebase-services/report.service';
@Component({
  selector: 'app-relatorio-mensal',
  templateUrl: './relatorio-mensal.component.html',
  styleUrls: ['./relatorio-mensal.component.css']
})
export class RelatorioMensalComponent implements OnInit {

  relatorio = [];

  constructor(private reportService: ReportService) { }

  ngOnInit() {
    this.reportService.getMonthlyReportFromDb().then(res => {

      const relatorioObj = Object.entries(res); //convertendo objeto num array no formato: [[key0, value0], [key1, value1]]
      console.log(relatorioObj);

      for (const item of relatorioObj ) {
        this.relatorio.push({ nome: item[0], quantidade: item[1] });
      }
      console.log(this.relatorio);
    });
  }
}
