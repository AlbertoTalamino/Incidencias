import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Incidencia } from './incidencia';

@Injectable({
  providedIn: 'root'
})
export class IncidenciasService {

  private miColeccion = "incidencias";
  constructor(private firebase: AngularFirestore) { }

  //CRUD

  //Read a single one
  getMascota(documentId: string){
    return this.firebase.collection(this.miColeccion).doc(documentId).snapshotChanges();
  }

  //Read all
  getAllMascotas(){
    return this.firebase.collection(this.miColeccion).snapshotChanges();
  }
 
  //Create
  newMascota(incidencia: Incidencia){
    return this.firebase.collection(this.miColeccion).add(incidencia);
  }

  //Update
  updateMascota(documentId: string, incidencia: Incidencia){
    return this.firebase.collection(this.miColeccion).doc(documentId).update(incidencia);
  }

  //Delete
  deleteMascota(documentId: string){
    return this.firebase.collection(this.miColeccion).doc(documentId).delete();
  }

  //Where
  getSpecificMascota(documentId: string, id: number){
    return this.firebase.collection(this.miColeccion, ref => ref.where('id', '==', id)).doc(documentId).snapshotChanges();
  }
}
