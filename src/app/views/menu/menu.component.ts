import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/core/services/auth.service';
import { Router } from '@angular/router';
import { CurrentUserService } from '../../auth/core/services/current-user-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  rol: string = '';

  constructor(
  private authService: AuthService,
  private currentUserService: CurrentUserService,
  private router: Router
  ) { }

  ngOnInit(): void {
    this.rol = this.currentUserService.getCurrentRol();
  }

  logout(){
    this.currentUserService.setCurrentRol('ninguno')

    this.router.navigate(['/']);

  }
}
