import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material/material.module';


@NgModule({
  declarations: [
    LoginComponent,
    //LoginFormComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    //MaterialModule,
    //ReactiveFormsModule
  ]
})
export class LoginModule { }
