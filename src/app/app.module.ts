import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { MatToolbarModule, MatIconModule, MatInputModule, MatListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HomeComponent } from './home/home.component';
import { AtualizaDadosComponent } from './atualiza-dados/atualiza-dados.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatGridListModule, MatButtonModule, MatCardModule } from '@angular/material';

import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';
<<<<<<< HEAD
import { CreateMenuComponent } from './create-menu/create-menu.component';
import { CategoriasMenuComponent } from './categorias-menu/categorias-menu.component';
=======
import { AddItemsComponent } from './add-items/add-items.component';
>>>>>>> ac9c412f38b2d4f270cd3755409dd8c2c4b21c5a

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AtualizaDadosComponent,
    LoginAdminComponent,
<<<<<<< HEAD
    CreateMenuComponent,
    CategoriasMenuComponent
=======
    AddItemsComponent
>>>>>>> ac9c412f38b2d4f270cd3755409dd8c2c4b21c5a
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
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
