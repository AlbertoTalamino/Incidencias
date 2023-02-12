import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componets/login/login.component';
import { RegisterComponent } from './componets/register/register.component';

const routes: Routes = [
{ path: '', component: LoginComponent },
{ path: 'register', component: RegisterComponent},
{ path: '**' , redirectTo: '/auth', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
