import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { HomeComponent } from './home/home.component';
import { AtualizaDadosComponent } from './atualiza-dados/atualiza-dados.component';
import { CreateMenuComponent } from './menu/create-menu/create-menu.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { EstoqueDeItensComponent } from './estoque-de-itens/estoque-de-itens.component';
import { TelaAdminComponent } from './tela-admin/tela-admin.component';
import { TelaUsuarioComponent } from './tela-usuario/tela-usuario.component';
import { PedirMarmitaComponent } from './pedir-marmita/pedir-marmita.component';

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
    path: 'create-menu',
    component: CreateMenuComponent
  },
  {
    path: 'estoque',
    component: EstoqueDeItensComponent
  },
  {
    path: "home-admin",
    component: HomeAdminComponent
  },
  {
    path: "tela-usuario",
    component: TelaUsuarioComponent
  },
  {
    path: "pedir-marmita",
    component: PedirMarmitaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
