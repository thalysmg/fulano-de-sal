import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { DadosPessoaisComponent } from './dados-pessoais/dados-pessoais.component';
import { ItensMarmitaComponent } from './itens-marmita/itens-marmita.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginAdminComponent,
    HomeComponent,
    MenuComponent,
    DadosPessoaisComponent,
    ItensMarmitaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    // Adicionando o módulo de formulários reativos no módulo da nossa aplicação
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'login',
        component: LoginAdminComponent
      },
      {
        path: 'dadosPessoais',
        component: DadosPessoaisComponent
      },
      {
        path: 'menu',
        component: MenuComponent
      },
      {
        path: 'itens',
        component: ItensMarmitaComponent
      }
    ])
  ],
  providers: [ {provide: String, useValue: "stringValue"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
