import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Personaje } from '@shared/components/interfaces/info_personajes';
import { environment } from '@environment/enviroment';


@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  constructor(private http: HttpClient) { }

  //Funcion que consume la api y busca todos los personajes segun el nombre
  buscarPersonajes(query='', page = 1){
    const filtro = `${environment.urlAPI}/?name=${query}&page=${page}`;
    return this.http.get<Personaje[]>(filtro);
  }
  //Funcion que consume la api y envia a la página, la informacion segun el id del personaje consultado
  detalles(id: number){
    return this.http.get<Personaje>(`${environment.urlAPI}/${id}`);
  }
}
