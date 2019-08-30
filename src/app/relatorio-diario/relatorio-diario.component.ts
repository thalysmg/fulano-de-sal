import { Component, OnInit } from '@angular/core';
import { ReportService } from '../firebase-services/report.service';

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
      const relatorioObj = Object.entries(res);
      console.log(relatorioObj);
      for (let i = 0; i < relatorioObj.length; i++) {
        let element = relatorioObj[i];
        this.relatorio.push({ nome: element[0], quantidade: element[1] });
      }
      console.log(this.relatorio);
    });
  }
}

