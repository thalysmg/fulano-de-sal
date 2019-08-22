import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { MatToolbarModule, MatIconModule, MatInputModule, MatListModule, MatSelectModule , MatOptionModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HomeComponent } from './home/home.component';
import { AtualizaDadosComponent } from './atualiza-dados/atualiza-dados.component';
import { DadosPessoaisComponent } from './dados-pessoais/dados-pessoais.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatFormFieldModule,
  MatButtonModule,
  MatCardModule,
  MatExpansionModule
} from '@angular/material';

import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';
import { CreateMenuComponent } from './menu/create-menu/create-menu.component';

import { MenuService } from './menu/menu.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { config } from './config/firebase-config';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { EstoqueDeItensComponent } from './estoque-de-itens/estoque-de-itens.component';
import { TelaUsuarioComponent } from './tela-usuario/tela-usuario.component';
import { PedirMarmitaComponent } from './pedir-marmita/pedir-marmita.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { RelatorioDiarioComponent } from './relatorio-diario/relatorio-diario.component';
import { RelatorioMensalComponent } from './relatorio-mensal/relatorio-mensal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AtualizaDadosComponent,
    DadosPessoaisComponent,
    LoginAdminComponent,
    CreateMenuComponent,
    HomeAdminComponent,
    EstoqueDeItensComponent,
    TelaUsuarioComponent,
    PedirMarmitaComponent,
    RelatoriosComponent,
    RelatorioDiarioComponent,
    RelatorioMensalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatToolbarModule,
    MatSelectModule,
    MatOptionModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MaterializeModule,
    AngularFireModule.initializeApp(config.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
