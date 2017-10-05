import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //Para el funcionamiento del twoway databinding
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { FrutaComponent } from './fruta/fruta.component';
import { EmpleadoComponent } from './empleado/empleado.component';

import { routing, appRoutingProviders } from './app.routing'

@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    EmpleadoComponent
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
