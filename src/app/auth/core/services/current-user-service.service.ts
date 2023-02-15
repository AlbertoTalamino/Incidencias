import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  private currentRol: string;

  constructor() { }

  setCurrentRol(rol: string) {
    this.currentRol = rol;
  }

  getCurrentRol() {
    return this.currentRol;
  }

}

