import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadercomponentComponent } from './modules/headercomponent/headercomponent.component';

import { AboutmecomponentComponent } from './modules/aboutmecomponent/aboutmecomponent.component';
import { ProyectscomponentComponent } from './modules/proyectscomponent/proyectscomponent.component';
import { ContactcomponentComponent } from './modules/contactcomponent/contactcomponent.component';
import { FootercomponentComponent } from './modules/footercomponent/footercomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadercomponentComponent,

    AboutmecomponentComponent,
    ProyectscomponentComponent,
    ContactcomponentComponent,
    FootercomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
