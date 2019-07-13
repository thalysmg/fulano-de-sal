import { Component } from '@angular/core';

 @Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.css']
})
export class DadosPessoaisComponent {
  
  constructor(nomeUsuario: string, telefone: string){
      this.nomeUsuario = nomeUsuario;
      this.telefone = telefone;
  }

  nomeUsuario: string;
  telefone: string;


  ngOnInit() {
  }

  loginUser(event){
    event.preventDefault
    console.log(event)
  }
}