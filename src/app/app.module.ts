import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { AtualizaDadosComponent } from './atualiza-dados/atualiza-dados.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatGridListModule, MatButtonModule, MatCardModule } from '@angular/material';

import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { config } from './config/firebase-config';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AtualizaDadosComponent,
    LoginAdminComponent
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
    MatCardModule,
    BrowserAnimationsModule,
    MaterializeModule,
    AngularFireModule.initializeApp(config.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
