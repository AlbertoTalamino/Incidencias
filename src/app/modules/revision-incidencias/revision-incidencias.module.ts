import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RevisionIncidenciasRoutingModule } from './revision-incidencias-routing.module';
import { RevisionIncidenciasComponent } from './revision-incidencias.component';


@NgModule({
  declarations: [
    RevisionIncidenciasComponent
  ],
  imports: [
    CommonModule,
    RevisionIncidenciasRoutingModule
  ]
})
export class RevisionIncidenciasModule { }
