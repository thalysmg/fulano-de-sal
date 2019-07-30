import { Component, OnInit } from '@angular/core'; 
import { MatToolbarModule } from '@angular/material'; 
import { BrowserModule } from '@angular/platform-browser';

//** */
export class AddItems{
  desc: string;
}
//** *//

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})

export class AddItemsComponent implements OnInit {

  addItem: AddItems = new AddItems();
  addItems: AddItems[] = [];

  constructor() { }

  ngOnInit() {
  }

  save(addItem: AddItems){
    this.addItems.push(addItem);
    this.addItem = new AddItems();
    this.addItems = Object.assign([], this.addItems);

  }

  delete(addItem: AddItems){
    this.addItems.splice(this.addItems.indexOf(addItem), 1);
  }

}

/**import { AppComponent } from './app.component';
@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})export class AppModule { }*/
