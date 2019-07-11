import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

 @Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.css']
})
export class DadosPessoaisComponent {
  dados = new FormControl('');

   updateDados() {
    this.dados.setValue('Nancy');
  }
}