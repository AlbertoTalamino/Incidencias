import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroduccionIncidenciasRoutingModule } from './introduccion-incidencias-routing.module';
import { IntroduccionIncidenciasComponent } from './introduccion-incidencias.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    IntroduccionIncidenciasComponent
  ],
  imports: [
    CommonModule,
    IntroduccionIncidenciasRoutingModule,
    ReactiveFormsModule
  ]
})
export class IntroduccionIncidenciasModule { }
