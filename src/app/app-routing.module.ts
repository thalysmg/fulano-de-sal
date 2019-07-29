import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { HomeComponent } from './home/home.component';
import { AtualizaDadosComponent } from './atualiza-dados/atualiza-dados.component';
<<<<<<< HEAD
import { CreateMenuComponent } from './create-menu/create-menu.component';
=======
import { AddItemsComponent } from './add-items/add-items.component';
>>>>>>> ac9c412f38b2d4f270cd3755409dd8c2c4b21c5a

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'loginAdm',
    component: LoginAdminComponent
  },
  {
    path: 'atualiza-dados',
    component: AtualizaDadosComponent
  },
  {
<<<<<<< HEAD
    path: 'create-menu',
    component: CreateMenuComponent
=======
    path: 'add-items',
    component: AddItemsComponent
>>>>>>> ac9c412f38b2d4f270cd3755409dd8c2c4b21c5a
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
