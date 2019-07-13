import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators
} from '../../node_modules/@angular/forms';
import { DadosPessoaisComponent } from './dados-pessoais/dados-pessoais.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  formularioDeUsuario: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.criarFormularioDeUsuario();
  }

  enviarDados(){
    const dadosFormulario = this.formularioDeUsuario.value;
    
    const usuario = new DadosPessoaisComponent(
      dadosFormulario.nomeUsuario,
      dadosFormulario.telefone
    );

    alert(`O usuário ${usuario.nomeUsuario} foi cadastrado com sucesso. \n Dados: ${JSON.stringify(usuario)}`);
  
    this.formularioDeUsuario.reset();
  }

  criarFormularioDeUsuario() {
    this.formularioDeUsuario = this.fb.group({
      nomeUsuario: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100)
        ])
      ]
      });
  }

  get nomeUsuario() {
    return this.formularioDeUsuario.get('nomeUsuario');
  }

  get telefone(){
    return this.formularioDeUsuario.get('telefone');
  }
}
