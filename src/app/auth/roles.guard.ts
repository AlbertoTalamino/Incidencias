import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { CurrentUserService } from './core/services/current-user-service.service';





@Injectable({
    providedIn: 'root'
})
export class RolesGuard implements CanActivate{

    //Propiedades
    currentRol: string;

    constructor(private currentUserService: CurrentUserService, private router: Router){
      //this.currentRol = this.currentUserService.getCurrentRol();
      //console.log(this.currentRol);
    }

    canActivate(
      route: ActivatedRouteSnapshot, 
      state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.checkUserLogin(route);
    }

    checkUserLogin(route: ActivatedRouteSnapshot): boolean {
        this.currentRol = this.currentUserService.getCurrentRol();

        if(this.currentRol === route.data["role"])
            return true;
        else{
            this.router.navigate(['/login']);
            return false;
        }

    }



}