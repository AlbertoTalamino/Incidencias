import { Component, OnInit, Injectable } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../core/services/users.service';
import { user } from '../../core/model/user';

import { DialogBoxComponent } from 'src/app/shared/material/dialog-box/dialog-box.component';
import { MatDialog } from '@angular/material/dialog';
import { CurrentUserService } from '../../core/services/current-user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //Propiedades
  datosformReg: any;
  listaUsers: any[] = [];

  //Formulario Reactivo
  formLogin = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    rol: ['user']
  });

  constructor(
    private authService: AuthService, 
    private usersService: UsersService,
    private currentUserService: CurrentUserService,
    private router: Router, 
    private fb: FormBuilder
    //public dialog: MatDialog
     ) { }

  ngOnInit(): void {
   
  }

  onSubmit() {
    //Login en Authentication
    this.authService.login(this.formLogin.value)
      .then(response => {
        
        //Sacamos la variable email
        const email = response.user.email;

        //Login en BBDD normal
        this.usersService.getFilterUser(email).subscribe((resp: any) => {
          
          //Guardamos el objeto que nos deuelve en una lista
          resp.forEach((user :any) => {

            this.listaUsers.push({
              id: user.payload.doc.id,  
              data: user.payload.doc.data()
            });
            
          });

          //Recorremos la lista y sacamos el valor del rol
          this.listaUsers.forEach(user => {
            this.currentUserService.setCurrentRol(user.data.rol);
          });
    
          });

        //Redirect to
        this.router.navigate(['/']);
      })
      .catch(error => {
        console.log(error);
        //this.dialog.open(DialogBoxComponent);
      });
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle()
      .then(response => {
        
        //Pasamos los datos del Formulario Reactivo a una variable
        this.datosformReg = this.formLogin.value;

        //Sacamos la variable email
        const email = response.user.email;

        //Login en BBDD normal
        this.usersService.getFilterUser(email).subscribe((resp: any) => {
          
          //Como al hacer Login con google no solo se logea, sino que si no tenemos
          //una cuenta la crea tenemos que actualizar nuestra BBDD normal
          this.usersService.newUser(this.datosformReg);

          //Guardamos el objeto que nos deuelve en una lista
          resp.forEach((user :any) => {

            this.listaUsers.push({
              id: user.payload.doc.id,  
              data: user.payload.doc.data()
            });
            
          });

          //Recorremos la lista y sacamos el valor del rol
          this.listaUsers.forEach(user => {
            this.currentUserService.setCurrentRol(user.data.rol);
          });

          });
          
        //Redirect to
        this.router.navigate(['/']);
      })
      .catch(error => console.log(error))
  }


}