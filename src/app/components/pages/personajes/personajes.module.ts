import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { DetallePersonajesComponent } from '@personajes/detalle-personajes/detalle-personajes.component';
import { ListaPersonajesComponent } from '@personajes/lista-personajes/lista-personajes.component';
import { PersonajeComponent } from '@personajes/personaje.component';


const componentes = [
  DetallePersonajesComponent,
  ListaPersonajesComponent,
  PersonajeComponent
]

@NgModule({
  declarations: [...componentes],
  imports: [CommonModule, RouterModule, InfiniteScrollModule],
  exports: [...componentes],
})
export class PersonajesModule { }
