import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IncidenciasService } from 'src/app/shared/core/services/incidencias.service';

@Component({
  selector: 'app-revision-incidencias',
  templateUrl: './revision-incidencias.component.html',
  styleUrls: ['./revision-incidencias.component.css']
})
export class RevisionIncidenciasComponent {

  //Propiedades
  documentId?: any;
  datosIncidencia: any;


  //Formulario reactivo
  dataIncidencia = this.fb.group({
    persona: [''],
    lugar: [''],
    descripcion: [''],
    fecha: [''],
    responsable: [null],
    estado: [null , Validators.required],
    solucion: [null],
    revisada: [false],
  });

  constructor(
    private incidenciasService: IncidenciasService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private location: Location
  ) {}

  ngOnInit(): void {

    this.documentId = this.route.snapshot.paramMap.get("documentId");
    this.incidenciasService.getIncidencia(this.documentId).subscribe((resp) => {
      this.datosIncidencia = resp.payload.data();
      this.dataIncidencia.setValue(this.datosIncidencia);
    });
  }

  actualizarEstado(){
    this.datosIncidencia = this.dataIncidencia.value;

    if (this.dataIncidencia.valid) {
      
      this.incidenciasService.updateIncidencia(this.documentId, this.datosIncidencia).then(
        () => {
          alert("Registro actualizado");
        },
        (error) => {
          alert("¡A ocurrido un error!");
          console.log(error);
        }
      );
  
    }else{
      this.dataIncidencia.reset();
      alert("Complete los campos");
    }
  }

  goBack(): void {
    this.location.back();
  }

}
