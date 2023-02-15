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

  constructor(
  private authService: AuthService,
  private currentUserService: CurrentUserService,
  private router: Router
    
    ) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout()
    .then( () => {
      this.currentUserService.setCurrentRol('a');
      console.log(this.currentUserService.getCurrentRol());
      this.router.navigate(['/']);
    })
    .catch(error => console.log(error));
  }
}
