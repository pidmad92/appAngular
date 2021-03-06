import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //Para el funcionamiento del twoway databinding
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { FrutaComponent } from './fruta/fruta.component';
import { EmpleadoComponent } from './empleado/empleado.component';

import { routing, appRoutingProviders } from './app.routing'

import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';

import { ConversorPipe } from './pipes/conversor.pipe'

import { CochesComponent } from './coches/coches.component';
@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    EmpleadoComponent,
    HomeComponent,
    ContactoComponent,
    ConversorPipe,
    CochesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
