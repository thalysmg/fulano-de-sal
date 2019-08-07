import { Component, OnInit } from '@angular/core';


export class App{
  desc: string;
}

@Component({
  selector: 'app-estoque-de-itens',
  templateUrl: './estoque-de-itens.component.html',
  styleUrls: ['./estoque-de-itens.component.css']
})

export class EstoqueDeItensComponent implements OnInit {

  todo: App = new App();
  todos: App[] = [];
  
  constructor() { }
  ngOnInit() {
  }

  save(todo: App){
    this.todos.push(todo);
    this.todo = new App();
    this.todos = Object.assign([], this.todos);
  }

  delete(todo: App){
    this.todos.splice(this.todos.indexOf(todo),1)
  }

  ///////
  
  save1(todo: App){
      this.todos.push(todo);
      this.todo = new App();
      this.todos = Object.assign([], this.todos);
  }
  
  delete1(todo: App){
      this.todos.splice(this.todos.indexOf(todo),1)
  }
  
  title = 'cardapio';

}
