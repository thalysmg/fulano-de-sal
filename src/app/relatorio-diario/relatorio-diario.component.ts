import { Component, OnInit } from '@angular/core';
import { ItemService} from '../firebase-services/items.service';

@Component({
  selector: 'app-relatorio-diario',
  templateUrl: './relatorio-diario.component.html',
  styleUrls: ['./relatorio-diario.component.css']
})
export class RelatorioDiarioComponent implements OnInit {

  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

}

