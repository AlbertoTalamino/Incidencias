import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WellcomeComponent } from './views/wellcome/wellcome.component';

import { RolesGuard } from './auth/roles.guard';

const routes: Routes = [
{ path: '', component: WellcomeComponent },
{ path: 'introduccionIncidencias', loadChildren: () => import('./modules/introduccion-incidencias/introduccion-incidencias.module').then(m => m.IntroduccionIncidenciasModule) },
{ path: 'gestionIncidencias', loadChildren: () => import('./modules/gestion-incidencias/gestion-incidencias.module').then(m => m.GestionIncidenciasModule),
  data: {
    role: 'gestion'
  },
  canActivate: [RolesGuard]
},
{ path: 'revisionIncidencias', loadChildren: () => import('./modules/revision-incidencias/revision-incidencias.module').then(m => m.RevisionIncidenciasModule),
  data: {
    role: 'revision'
  },
  canActivate: [RolesGuard]
},
{ path: 'login', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
{ path: '**' , redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
