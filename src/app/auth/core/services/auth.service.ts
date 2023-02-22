import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  estadoRegistro: boolean = false;

  constructor(private auth: Auth, private auth2: AngularFireAuth) { }

  thisIsAuthentificated(){
    return this.auth2.authState;
  }

  login({ email, password }: any) {
    this.estadoRegistro = true;
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  register({ email, password }: any) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    this.estadoRegistro = false;
    return signOut(this.auth);
  }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }


}
