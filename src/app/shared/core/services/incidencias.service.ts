import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Incidencia } from '../model/incidencia';


@Injectable({
  providedIn: 'root'
})
export class IncidenciasService {

  private miColeccion = "incidencias";
  constructor(private firebase: AngularFirestore) { }

  //CRUD

  //Read a single one
  getIncidencia(documentId: string){
    return this.firebase.collection(this.miColeccion).doc(documentId).snapshotChanges();
  }

  //Read all
  getAllIncidencias(){
    return this.firebase.collection(this.miColeccion).snapshotChanges();
  }
 
  //Create
  newIncidencia(incidencia: Incidencia){
    return this.firebase.collection(this.miColeccion).add(incidencia);
  }

  //Update
  updateIncidencia(documentId: string, incidencia: Incidencia){
    return this.firebase.collection(this.miColeccion).doc(documentId).update(incidencia);
  }

  //Delete
  deleteIncidencia(documentId: string){
    return this.firebase.collection(this.miColeccion).doc(documentId).delete();
  }

  //Where
  getFilterIncidencia(revisada: boolean){
    return this.firebase.collection(this.miColeccion, ref => ref.where('revisada', '==', revisada)).snapshotChanges();
  }

  //Where specific
  getSpecificIncidencia(documentId: string, id: number){
    return this.firebase.collection(this.miColeccion, ref => ref.where('id', '==', id)).doc(documentId).snapshotChanges();
  }
  
}
