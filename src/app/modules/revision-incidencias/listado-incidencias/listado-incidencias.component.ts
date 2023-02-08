import { Component, OnInit } from '@angular/core';
import { IncidenciasService } from 'src/app/shared/services/incidencias.service';

@Component({
  selector: 'app-listado-incidencias',
  templateUrl: './listado-incidencias.component.html',
  styleUrls: ['./listado-incidencias.component.css']
})
export class ListadoIncidenciasComponent implements OnInit {

  listaIncidencias: any[] = [];
  listaIncidenciasRevisadas: any[] = [];
  listaIncidenciasNoRevisadas: any[] = [];
  fontStyle?: string = ' ';

  constructor(private incidenciasService: IncidenciasService) { }

  ngOnInit(): void {
    this.getAll();
    this.getAllRevisadas();
    this.getAllNoRevisadas();
  }

  getAll(){ 
    this.incidenciasService.getAllIncidencias().subscribe((incidenciasSnapshot: any) => {
      incidenciasSnapshot.forEach((incidenciaData:any) => {

        this.listaIncidencias.push({
          id: incidenciaData.payload.doc.id, 
          data: incidenciaData.payload.doc.data()
        });
        
      });
    })
  }

  getAllRevisadas() {
    this.incidenciasService.getFilterIncidencia(true).subscribe((incidenciasSnapshot: any) => {
      incidenciasSnapshot.forEach((incidenciaData:any) => {

        this.listaIncidenciasRevisadas.push({
          id: incidenciaData.payload.doc.id, 
          data: incidenciaData.payload.doc.data()
        });
        
      });
    })
  }

  getAllNoRevisadas() {
    this.incidenciasService.getFilterIncidencia(false).subscribe((incidenciasSnapshot: any) => {
      incidenciasSnapshot.forEach((incidenciaData:any) => {

        this.listaIncidenciasNoRevisadas.push({
          id: incidenciaData.payload.doc.id, 
          data: incidenciaData.payload.doc.data()
        });
        
      });
    })
  }

}
