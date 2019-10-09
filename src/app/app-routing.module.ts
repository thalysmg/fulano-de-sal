import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { HomeComponent } from './home/home.component';
import { AtualizaDadosComponent } from './atualiza-dados/atualiza-dados.component';
import { CreateMenuComponent } from './menu/create-menu/create-menu.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { EstoqueDeItensComponent } from './estoque-de-itens/estoque-de-itens.component';
import { PedirMarmitaComponent } from './pedir-marmita/pedir-marmita.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { PedidosRealizadosComponent } from './pedidos-realizados/pedidos-realizados.component';
import { RelatorioDiarioComponent } from './relatorio-diario/relatorio-diario.component';
import { RelatorioMensalComponent } from './relatorio-mensal/relatorio-mensal.component';
import { AuthGuardService } from './guards/auth-guard.service';

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
    path: 'montar-cardapio',
    component: CreateMenuComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'estoque',
    component: EstoqueDeItensComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'home-admin',
    component: HomeAdminComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'pedir-marmita',
    component: PedirMarmitaComponent
  },
  {
    path: 'relatorios',
    component: RelatoriosComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'relatorio-diario',
    component: RelatorioDiarioComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'relatorio-mensal',
    component: RelatorioMensalComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'pedidos-realizados',
    component: PedidosRealizadosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
