import { Component } from '@angular/core';

export type EditorType = 'dados-pessoais' | 'menu' | '' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  editor: EditorType = '';

  get showDadosPessoais() {
    return this.editor === 'dados-pessoais';
  }

  get showMenu() {
    return this.editor === 'menu';
  }

  toggleEditor(type: EditorType) {
    this.editor = type;
  }
}