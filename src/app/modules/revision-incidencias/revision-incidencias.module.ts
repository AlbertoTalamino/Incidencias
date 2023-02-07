import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RevisionIncidenciasRoutingModule } from './revision-incidencias-routing.module';
import { RevisionIncidenciasComponent } from './revision-incidencias.component';
import { ListadoIncidenciasComponent } from './listado-incidencias/listado-incidencias.component';


@NgModule({
  declarations: [
    RevisionIncidenciasComponent,
    ListadoIncidenciasComponent
  ],
  imports: [
    CommonModule,
    RevisionIncidenciasRoutingModule
  ]
})
export class RevisionIncidenciasModule { }
