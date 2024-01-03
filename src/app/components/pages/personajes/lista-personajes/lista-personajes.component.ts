import { Component, HostListener, Inject, OnInit, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from '@angular/router';
import { DOCUMENT, Location } from '@angular/common';

import { Personaje } from '@app/shared/components/interfaces/info_personajes';
import { PersonajeService } from '@app/shared/services/personaje.service';
import { filter, take } from 'rxjs/operators';


type RequestInfo = {
  next: string | null;
};

@Component({
  selector: 'app-lista-personajes',
  templateUrl: './lista-personajes.component.html',
  styleUrls: ['./lista-personajes.component.scss']
})
export class ListaPersonajesComponent implements OnInit{
  personajes: Personaje[] = [];
  info: RequestInfo = {
    next: null,
  };
  mostrarBotonInicio = false;
  private pageNum = 1;
  private query!: string;
  private hideScrollHeight = 200;
  private showScrollHeight = 500; //Definir tamaño para que el boton de volver al inicio salga

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private personajeService: PersonajeService,
    private route: ActivatedRoute,
    private router: Router,
    private location:Location
    ) {
      this.cambioUrl();
    }

  ngOnInit(): void {
    this.obtenerPersonajesPorBusqueda();
  }

  @HostListener('window:scroll', [])

  //Funcion para definir en que momento del uso de la ventana, esta active la visibilidad del boton dependiendo del navegador y el tamaño
  windowScroll(): void{
    const yOffSet = window.pageYOffset;
    if((yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop) > this.showScrollHeight){
      this.mostrarBotonInicio = true;
    } else if (this.mostrarBotonInicio && (yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop) < this.hideScrollHeight){
      this.mostrarBotonInicio = false;
    }
  }

  scrollDown(): void{
    if(this.info.next){
      this.pageNum++;
      this.obtenerDatosDelServicio();
    }
  }

  scrollUp(): void{
    this.document.body.scrollTop = 0; // mover la vista de la pestaña para arriba en el navegador safari
    this.document.documentElement.scrollTop = 0; // mover la vista de la pestaña para arriba en cualquier otro navegador
  }

  private cambioUrl(): void {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd))
    .subscribe(() => {
      this.personajes = [];
      this.pageNum = 1;
      this.obtenerPersonajesPorBusqueda();
    });
  }

  //Funcion que sirve para mostrar en pantalla los datos del personaje escrito en la barra de busqueda
  private obtenerPersonajesPorBusqueda(): void{
    this.route.queryParams.pipe(take(1)).subscribe((params: ParamMap) => {
      this.query = params['q'];
      this.obtenerDatosDelServicio();
    });
  }

  private obtenerDatosDelServicio (): void{
    this.personajeService.buscarPersonajes(this.query, this.pageNum)
    .pipe(take(1))
    .subscribe( (res:any) => {
      if(res?.results?.length){
        const {info, results } = res
        this.personajes = [ ...this.personajes, ...results];
        this.info = info;
      } else {
        this.personajes = [];
      }

    })
  }

  volver(): void{
    this.location.back();
  }
}
