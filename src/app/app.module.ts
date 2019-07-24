import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
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
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
