import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WellcomeComponent } from './views/wellcome/wellcome.component';

const routes: Routes = [
{ path: '', component: WellcomeComponent },
{ path: 'introduccionIncidencias', loadChildren: () => import('./modules/introduccion-incidencias/introduccion-incidencias.module').then(m => m.IntroduccionIncidenciasModule) },
{ path: 'gestionIncidencias', loadChildren: () => import('./modules/gestion-incidencias/gestion-incidencias.module').then(m => m.GestionIncidenciasModule) },
{ path: 'revisionIncidencias', loadChildren: () => import('./modules/revision-incidencias/revision-incidencias.module').then(m => m.RevisionIncidenciasModule) },
{ path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
{ path: '**' , redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
