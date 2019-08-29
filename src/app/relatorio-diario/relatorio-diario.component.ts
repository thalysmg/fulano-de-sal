import { Component, OnInit } from '@angular/core';
import { ReportService } from '../firebase-services/report.service';

@Component({
  selector: 'app-relatorio-diario',
  templateUrl: './relatorio-diario.component.html',
  styleUrls: ['./relatorio-diario.component.css']
})
export class RelatorioDiarioComponent implements OnInit {

  constructor(private reportService: ReportService) { }

  ngOnInit() {

  }
}

