import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { HomeComponent } from './home/home.component';
import { AtualizaDadosComponent } from './atualiza-dados/atualiza-dados.component';
<<<<<<< HEAD
import { AddItemsComponent } from './add-items/add-items.component';
=======
import { CreateMenuComponent } from './create-menu/create-menu.component';
import { AddItemsComponent } from './add-items/add-items.component';
import { DadosPessoaisComponent } from './dados-pessoais/dados-pessoais.component';
import { MenuComponent } from './menu/menu.component';
>>>>>>> 1ee39278d9961793e9d8e326b2a4d168469e223e

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
    path: 'add-items',
    component: AddItemsComponent
=======
    path: 'create-menu',
    component: CreateMenuComponent
  },
  {
    path: 'add-items',
    component: AddItemsComponent
  },
  {
    path: 'dados-pessoais',
    component: DadosPessoaisComponent
  },
  {
    path: 'menu',
    component: MenuComponent
>>>>>>> 1ee39278d9961793e9d8e326b2a4d168469e223e
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
