import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { HomeComponent } from './home/home.component';
import { AtualizaDadosComponent } from './atualiza-dados/atualiza-dados.component';
import { CreateMenuComponent } from './create-menu/create-menu.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
