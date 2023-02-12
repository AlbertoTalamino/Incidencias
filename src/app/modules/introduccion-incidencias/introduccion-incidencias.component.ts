import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IncidenciasService } from '../../shared/core/services/incidencias.service';

@Component({
  selector: 'app-introduccion-incidencias',
  templateUrl: './introduccion-incidencias.component.html',
  styleUrls: ['./introduccion-incidencias.component.css']
})
export class IntroduccionIncidenciasComponent {
  
  //Propiedades
  datosIncidencia: any;
  date = new Date();

  //Formulario reactivo
  dataIncidencia = this.fb.group({
    persona: ['', Validators.required],
    lugar: ['', Validators.required],
    descripcion: ['', Validators.required],
    fecha: [this.date.toLocaleDateString()],
    responsable: [null],
    estado: [null],
    solucion: [null],
    revisada: [false]
  });

  constructor(
    private incidenciasService: IncidenciasService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

  }
  
  anotarIncidencia(){
    this.datosIncidencia = this.dataIncidencia.value;

    if (this.dataIncidencia.valid) {

      this.incidenciasService.newIncidencia(this.datosIncidencia).then(
        () => {
          this.dataIncidencia.reset();
          alert("Incidencia registrada");
        },
        (error) => {
          this.dataIncidencia.reset();
          alert("¡A ocurrido un error!");
          console.log(error);
        }
      );

    }else{
      this.dataIncidencia.reset();
      alert("Complete los campos");
    }
    
  }
}
