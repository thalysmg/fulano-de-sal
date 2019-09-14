import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { HomeComponent } from './home/home.component';
import { AtualizaDadosComponent } from './atualiza-dados/atualiza-dados.component';
import { DadosPessoaisComponent } from './dados-pessoais/dados-pessoais.component';
import { CreateMenuComponent } from './menu/create-menu/create-menu.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { EstoqueDeItensComponent } from './estoque-de-itens/estoque-de-itens.component';
import { PedirMarmitaComponent } from './pedir-marmita/pedir-marmita.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { RelatorioDiarioComponent } from './relatorio-diario/relatorio-diario.component';
import { RelatorioMensalComponent } from './relatorio-mensal/relatorio-mensal.component';

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
    path: 'dados-pessoais',
    component: DadosPessoaisComponent
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
    path: "pedir-marmita",
    component: PedirMarmitaComponent
  },
  {
    path: "relatorios",
    component: RelatoriosComponent
  },
  {
    path: "relatorio-diario",
    component: RelatorioDiarioComponent
  },
  {
    path: "relatorio-mensal",
    component: RelatorioMensalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
