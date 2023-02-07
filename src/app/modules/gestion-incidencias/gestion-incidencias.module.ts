import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionIncidenciasRoutingModule } from './gestion-incidencias-routing.module';
import { GestionIncidenciasComponent } from './gestion-incidencias.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListadoIncidenciasComponent } from './listado-incidencias/listado-incidencias.component';


@NgModule({
  declarations: [
    GestionIncidenciasComponent,
    ListadoIncidenciasComponent
  ],
  imports: [
    CommonModule,
    GestionIncidenciasRoutingModule,
    ReactiveFormsModule
  ]
})
export class GestionIncidenciasModule { }
