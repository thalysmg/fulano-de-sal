import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { log } from 'util';

@Injectable({providedIn: 'root'})
export class MenuService {

  constructor() {
  }

  public createMenu(form: NgForm) {
    console.log("Você chegou até aqui (MenuService)!!");
    console.log(form.value);
  }

}
