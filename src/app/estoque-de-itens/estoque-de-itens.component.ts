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

  todo1: App = new App();
  todos1: App[] = [];

  save1(todo1: App){
      this.todos1.push(todo1);
      this.todo1 = new App();
      this.todos1 = Object.assign([], this.todos1);
  }
  
  delete1(todo1: App){
      this.todos1.splice(this.todos1.indexOf(todo1),1)
  }

  todo2: App = new App();
  todos2: App[] = [];

  save2(todo2: App){
      this.todos2.push(todo2);
      this.todo2 = new App();
      this.todos2 = Object.assign([], this.todos2);
  }
  
  delete2(todo2: App){
      this.todos2.splice(this.todos2.indexOf(todo2),1)
  }

  todo3: App = new App();
  todos3: App[] = [];

  save3(todo3: App){
      this.todos3.push(todo3);
      this.todo3 = new App();
      this.todos3 = Object.assign([], this.todos3);
  }
  
  delete3(todo3: App){
      this.todos3.splice(this.todos1.indexOf(todo3),1)
  }

  todo4: App = new App();
  todos4: App[] = [];

  save4(todo4: App){
      this.todos4.push(todo4);
      this.todo4 = new App();
      this.todos4 = Object.assign([], this.todos4);
  }
  
  delete4(todo4: App){
      this.todos4.splice(this.todos4.indexOf(todo4),1)
  }

  todo5: App = new App();
  todos5: App[] = [];

  save5(todo5: App){
      this.todos5.push(todo5);
      this.todo5 = new App();
      this.todos5 = Object.assign([], this.todos5);
  }
  
  delete5(todo5: App){
      this.todos5.splice(this.todos5.indexOf(todo5),1)
  }

  todo6: App = new App();
  todos6: App[] = [];

  save6(todo6: App){
      this.todos6.push(todo6);
      this.todo6 = new App();
      this.todos6 = Object.assign([], this.todos6);
  }
  
  delete6(todo6: App){
      this.todos6.splice(this.todos6.indexOf(todo6),1)
  }
  
  title = 'cardapio';

}
