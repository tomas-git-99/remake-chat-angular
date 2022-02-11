import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatModule } from './componente/chat/chat.module';
import { ContactosComponent } from './componente/contactos/contactos.component';
import { ComponenteComponent } from './componente/componente.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactosComponent,
    ComponenteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
