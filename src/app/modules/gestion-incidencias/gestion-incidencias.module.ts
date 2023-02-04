import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionIncidenciasRoutingModule } from './gestion-incidencias-routing.module';
import { GestionIncidenciasComponent } from './gestion-incidencias.component';


@NgModule({
  declarations: [
    GestionIncidenciasComponent
  ],
  imports: [
    CommonModule,
    GestionIncidenciasRoutingModule
  ]
})
export class GestionIncidenciasModule { }
