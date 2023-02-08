import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RevisionIncidenciasRoutingModule } from './revision-incidencias-routing.module';
import { RevisionIncidenciasComponent } from './revision-incidencias.component';
import { ListadoIncidenciasComponent } from './listado-incidencias/listado-incidencias.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';


@NgModule({
  declarations: [
    RevisionIncidenciasComponent,
    ListadoIncidenciasComponent
  ],
  imports: [
    CommonModule,
    RevisionIncidenciasRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ]
})
export class RevisionIncidenciasModule { }
