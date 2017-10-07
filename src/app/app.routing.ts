import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importar componentes
import { EmpleadoComponent } from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CochesComponent } from './coches/coches.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent },
    { path: 'empleado', component: EmpleadoComponent},
    { path: 'fruta', component: FrutaComponent},
    { path: 'contacto', component: ContactoComponent },
    //Routing con parametros asi acepta parametros
    { path: 'contacto/:page', component: ContactoComponent },
    { path: 'coches', component: CochesComponent },
    { path: '**', component: HomeComponent},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);