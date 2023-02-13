import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WellcomeComponent } from './views/wellcome/wellcome.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [
{ path: '', component: WellcomeComponent },
{ path: 'introduccionIncidencias', loadChildren: () => import('./modules/introduccion-incidencias/introduccion-incidencias.module').then(m => m.IntroduccionIncidenciasModule) },
{ path: 'gestionIncidencias', loadChildren: () => import('./modules/gestion-incidencias/gestion-incidencias.module').then(m => m.GestionIncidenciasModule),
  ...canActivate(() => redirectUnauthorizedTo(['/login']))},
{ path: 'revisionIncidencias', loadChildren: () => import('./modules/revision-incidencias/revision-incidencias.module').then(m => m.RevisionIncidenciasModule),
  ...canActivate(() => redirectUnauthorizedTo(['/login'])) },
{ path: 'login', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
{ path: '**' , redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
