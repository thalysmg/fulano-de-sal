import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { MatToolbarModule, MatIconModule, MatInputModule, MatListModule, MatSelectModule , MatOptionModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HomeComponent } from './home/home.component';
import { AtualizaDadosComponent } from './atualiza-dados/atualiza-dados.component';
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

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { config } from './config/firebase-config';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { EstoqueDeItensComponent } from './estoque-de-itens/estoque-de-itens.component';
import { PedirMarmitaComponent } from './pedir-marmita/pedir-marmita.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { RelatorioDiarioComponent } from './relatorio-diario/relatorio-diario.component';
import { RelatorioMensalComponent } from './relatorio-mensal/relatorio-mensal.component';
import { MessagingService } from './firebase-services/messaging.service';
import { AuthGuardService } from './guards/auth-guard.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { PedidosRealizadosComponent } from './pedidos-realizados/pedidos-realizados.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AtualizaDadosComponent,
    LoginAdminComponent,
    CreateMenuComponent,
    HomeAdminComponent,
    EstoqueDeItensComponent,
    PedirMarmitaComponent,
    RelatoriosComponent,
    RelatorioDiarioComponent,
    RelatorioMensalComponent,
    PedidosRealizadosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
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
    AngularFireMessagingModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [MessagingService, AuthGuardService, {
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
