import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './modules/components/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MercanciaComponent } from './modules/components/mercancia/mercancia.component';
import { UsuarioService } from './service/usuarioService';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { MercanciaService } from './service/mercanciaService';
import { ModalsComponent } from './modules/components/modals/modals.component';
import { ModalEditComponent } from './modules/components/modal-edit/modal-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MercanciaComponent,
    ModalsComponent,
    ModalEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    CommonModule
  ],
  providers: [UsuarioService,MercanciaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
