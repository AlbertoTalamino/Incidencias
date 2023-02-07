import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RevisionIncidenciasRoutingModule } from './revision-incidencias-routing.module';
import { RevisionIncidenciasComponent } from './revision-incidencias.component';
import { ListadoIncidenciasComponent } from './listado-incidencias/listado-incidencias.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RevisionIncidenciasComponent,
    ListadoIncidenciasComponent
  ],
  imports: [
    CommonModule,
    RevisionIncidenciasRoutingModule,
    ReactiveFormsModule
  ]
})
export class RevisionIncidenciasModule { }
