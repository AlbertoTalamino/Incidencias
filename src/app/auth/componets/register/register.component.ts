import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //Propiedades
  datosformReg: any;

  //Formulario Reactivo
  formReg = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    passwordR: ['', Validators.required]
  })


  constructor(
   private authService: AuthService, 
   private router: Router,
   private fb: FormBuilder) {
    
  }

  ngOnInit(): void {
    // Añadir validación personalizada al campo passwordR para comprobar que los campos password y passwordR son iguales
    setTimeout(() => {
      if (this.formReg.hasError('passwordsNotMatch')) {
        console.log('Las contraseñas no coinciden');
        return;
      }
    });
  }

  onSubmit() {

    this.datosformReg = this.formReg.value;

    if (this.formReg.hasError('passwordsNotMatch')) {
      console.log('Las contraseñas no coinciden');
      return;
    }

    this.authService.register(this.datosformReg)
      .then(response => {
        console.log(response);
        this.router.navigate(['/']);
      })
      .catch(error => console.log(error));
  }

  // Función para validar que los campos password y passwordR son iguales
  private checkPasswordsMatch(passwordControl: AbstractControl): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const password = passwordControl.value;
      const passwordR = control.value;
      return password === passwordR ? null : {'passwordsNotMatch': true};
    };
  }

}
