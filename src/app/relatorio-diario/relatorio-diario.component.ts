import { Component, OnInit } from '@angular/core';
import { ReportService } from '../firebase-services/report.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-relatorio-diario',
  templateUrl: './relatorio-diario.component.html',
  styleUrls: ['./relatorio-diario.component.css']
})
export class RelatorioDiarioComponent implements OnInit {

  relatorio = [];

  constructor(private afAuth: AngularFireAuth, private reportService: ReportService, private location: Location, private router: Router) { }

  ngOnInit() {
    this.reportService.getReportFromDb().then(res => {

      const relatorioObj = Object.entries(res); // convertendo objeto num array no formato: [[key0, value0], [key1, value1]]
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

  logout() {
    this.router.navigate(['']);
    localStorage.clear();
    this.afAuth.auth.signOut();
  }
}
