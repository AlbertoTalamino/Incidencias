import { Component, OnInit } from '@angular/core';
import { IncidenciasService } from 'src/app/shared/services/incidencias.service';

@Component({
  selector: 'app-listado-incidencias',
  templateUrl: './listado-incidencias.component.html',
  styleUrls: ['./listado-incidencias.component.css']
})
export class ListadoIncidenciasComponent implements OnInit {

  listaIncidencias: any[] = [];

  constructor(private incidenciasService: IncidenciasService) { }

  ngOnInit(): void {
    this.getAll();
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
}
