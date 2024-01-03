import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Observable, take } from 'rxjs';
import { Personaje } from '@app/shared/components/interfaces/info_personajes';
import { PersonajeService } from '@app/shared/services/personaje.service';

@Component({
  selector: 'app-detalle-personajes',
  templateUrl: './detalle-personajes.component.html',
  styleUrls: ['./detalle-personajes.component.scss']
})

export class DetallePersonajesComponent implements OnInit{
  personajes: Observable<Personaje>; //Variable que contiene los parametros establecidos en el modelo de personaje

  constructor(
    private route: ActivatedRoute,
    private personajeService:PersonajeService,
    private location:Location
  ){}

  ngOnInit(): void {
    this.route.params.pipe( take(1)).subscribe((params) =>{
      const id= params ['id'];
      this.personajes = this.personajeService.detalles(id); //traer todos los detalles del personaje seleccionado por medio del id
    })
  }

  volver(): void{
    this.location.back();
  }

}
