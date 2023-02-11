import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginData } from './shared/model/login-data';
import { AuthService } from './shared/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private readonly authService: AuthService,
    //private readonly router: Router
  ) { }

  ngOnInit(): void {
  }

  // login(loginData: LoginData) {
  //   this.authService
  //     .login(loginData)
  //     .then(() => this.router.navigate(['/dashboard']))
  //     .catch((e) => console.log(e.message));
  // }

}
