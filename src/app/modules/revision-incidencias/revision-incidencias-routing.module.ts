import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RevisionIncidenciasComponent } from './revision-incidencias.component';
import { ListadoIncidenciasComponent } from './listado-incidencias/listado-incidencias.component';

const routes: Routes = [
  { path: '', component: ListadoIncidenciasComponent },
  { path: 'revisionIncidencias/:documentId', component: RevisionIncidenciasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RevisionIncidenciasRoutingModule { }
