import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path: 'introduccionIncidencias', loadChildren: () => import('./modules/introduccion-incidencias/introduccion-incidencias.module').then(m => m.IntroduccionIncidenciasModule) },
{ path: 'gestionIncidencias', loadChildren: () => import('./modules/gestion-incidencias/gestion-incidencias.module').then(m => m.GestionIncidenciasModule) },
{ path: 'revisionIncidencias', loadChildren: () => import('./modules/revision-incidencias/revision-incidencias.module').then(m => m.RevisionIncidenciasModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
