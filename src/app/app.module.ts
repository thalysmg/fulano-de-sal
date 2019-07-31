import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { MatToolbarModule, MatIconModule, MatInputModule, MatListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HomeComponent } from './home/home.component';
import { AtualizaDadosComponent } from './atualiza-dados/atualiza-dados.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
<<<<<<< HEAD
=======
import { DadosPessoaisComponent } from './dados-pessoais/dados-pessoais.component';
import { MenuComponent } from './menu/menu.component';
>>>>>>> 1ee39278d9961793e9d8e326b2a4d168469e223e

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatGridListModule, MatButtonModule, MatCardModule } from '@angular/material';

import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';
<<<<<<< HEAD
import { AddItemsComponent } from './add-items/add-items.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { config } from './config/firebase-config';

=======
import { CreateMenuComponent } from './create-menu/create-menu.component';
import { AddItemsComponent } from './add-items/add-items.component';

>>>>>>> 1ee39278d9961793e9d8e326b2a4d168469e223e
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AtualizaDadosComponent,
    LoginAdminComponent,
<<<<<<< HEAD
    AddItemsComponent
=======
    CreateMenuComponent,
    AddItemsComponent,
    DadosPessoaisComponent,
    MenuComponent
>>>>>>> 1ee39278d9961793e9d8e326b2a4d168469e223e
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatToolbarModule,
    BrowserAnimationsModule,
<<<<<<< HEAD
    MaterializeModule,
    AngularFireModule.initializeApp(config.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    FlexLayoutModule
=======
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterializeModule
>>>>>>> 1ee39278d9961793e9d8e326b2a4d168469e223e
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
