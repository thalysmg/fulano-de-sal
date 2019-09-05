import { Component, OnInit } from '@angular/core';
import { ReportService } from '../firebase-services/report.service';
import { log } from 'util';

@Component({
  selector: 'app-relatorio-diario',
  templateUrl: './relatorio-diario.component.html',
  styleUrls: ['./relatorio-diario.component.css']
})
export class RelatorioDiarioComponent implements OnInit {

  relatorio = [];

  constructor(private reportService: ReportService) { }

  ngOnInit() {
    this.reportService.getReportFromDb().then(res => {

      const relatorioObj = Object.entries(res); //convertendo objeto num array no formato: [[key0, value0], [key1, value1]]
      console.log(relatorioObj);

      for (const item of relatorioObj ) {
        this.relatorio.push({ nome: item[0], quantidade: item[1] });
      }
      console.log(this.relatorio);
    });
  }
}

