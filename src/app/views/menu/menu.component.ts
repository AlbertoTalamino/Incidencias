import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthService } from '../../auth/core/services/auth.service';
import { Router } from '@angular/router';
import { CurrentUserService } from '../../auth/core/services/current-user-service.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  authentificated: boolean = false;

  constructor(
  public authService: AuthService,
  private currentUserService: CurrentUserService,
  private router: Router
  ) { }

  ngOnInit(): void {
    this.authService.thisIsAuthentificated().subscribe( (resp: any) => {
      if(resp.uid){
        this.authentificated = this.authService.estadoRegistro;
      }
      else{
        this.authentificated = this.authService.estadoRegistro;
      }
    }
    );
    
  }


  logout(){
    this.currentUserService.setCurrentRol('')

    this.router.navigate(['/']);

  }
}
