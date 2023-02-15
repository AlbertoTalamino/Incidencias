import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { UsersService } from '../../core/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  //Propiedades
  datosformReg: any;
  passwordOk = false;

  //Formulario Reactivo
  formReg = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    passwordR: ['', Validators.required],
    rol: ['user']
  });

  constructor(
    private authService: AuthService,
    private usersService: UsersService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}

  onSubmit() {

    this.datosformReg = {
      email: this.formReg.get('email')?.value,
      password: this.formReg.get('password')?.value,
      rol: this.formReg.get('rol')?.value
    };
    

    if (this.formReg.valid) {

      //Registro en Authentication
      this.authService.register(this.datosformReg)
      .then((response) => {
        //Registro en usuarios (BBDD Normal)
        this.usersService.newUser(this.datosformReg).then(
          () => {
            alert('Usuario registrado');
          });
        
        //Redirect to
        this.router.navigate(['/']);
      })
      .catch((error) => {
        console.log(error);
        this.formReg.reset();
        alert('Error al registrar usuario');
      });
      
    } else {
      alert('Complete los campos');
    }
   
  }

  compruebaPassword() {
    const password = this.formReg.get('password')?.value;
    const passwordR = this.formReg.get('passwordR')?.value;
    console.log(passwordR, " - ", password);
    if (password === passwordR) {
      console.log('Passwords iguales');
      this.passwordOk = true;
    } else {
      console.log('Password no coinciden');
      this.passwordOk = false;
    }
  }
}

