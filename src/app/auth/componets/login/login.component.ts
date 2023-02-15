import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from '../../core/services/users.service';
import { user } from '../../core/model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  currentUser: user;

  constructor(private authService: AuthService, private usersService: UsersService, private router: Router) { 
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
   
  }

  onSubmit() {
    //Login en Authentication
    this.authService.login(this.formLogin.value)
      .then(response => {
        
        //Sacamos la variable email
        const email = response.user.email;

        //Login en BBDD normal
        this.usersService.getFilterUser(email).subscribe((user: any) => {
    
          this.currentUser = user;
          console.log(this.currentUser.rol);
    
          });

        //Redirect to
        this.router.navigate(['/']);
      })
      .catch(error => console.log(error));
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle()
      .then(response => {
        console.log(response);
        this.router.navigate(['/']);
      })
      .catch(error => console.log(error))
  }

}
