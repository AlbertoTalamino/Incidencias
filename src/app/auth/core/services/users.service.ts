import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { user } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  //Coleccion de Firebase
  private miColeccion = "usuarios";

  constructor(private firebase: AngularFirestore) { }

  //CRUD

  //Read a single one
  getUser(documentId: string){
    return this.firebase.collection(this.miColeccion).doc(documentId).snapshotChanges();
  }

  //Read all
  getAllUsers(){
    return this.firebase.collection(this.miColeccion).snapshotChanges();
  }
 
  //Create
  newUser(user: user){
    return this.firebase.collection(this.miColeccion).add(user);
  }

  //Update
  updateUser(documentId: string, user: user){
    return this.firebase.collection(this.miColeccion).doc(documentId).update(user);
  }

  //Delete
  deleteUser(documentId: string){
    return this.firebase.collection(this.miColeccion).doc(documentId).delete();
  }

  //Where
  getFilterUser(email: any){
    return this.firebase.collection(this.miColeccion, ref => ref.where('email', '==', email)).snapshotChanges();
  }

}
