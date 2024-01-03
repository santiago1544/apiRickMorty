import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  template: `
    <input
      #inputSearch
      autofocus
      type="text"
      class="form-control-lg"
      placeholder="Buscar Personaje"
      (keyup)="onSearch(inputSearch.value)"
    /><!--Se usa la funcion onSearch para tomar el valor escrito y compararlo con los posibles resultados de los datos en la API-->
  `,
  styles: ['input {width:100%;}'],
})
export class BuscadorComponent implements OnInit {
  constructor (private router: Router) {}

  ngOnInit(): void {}

  onSearch(value: string) {
    if (value && value.length > 3) { //Condicion para que en el momento que se digiten 4 o mas carácteres en la barra, la página muestre resultados
      this.router.navigate(['/lista_personajes'], {
        queryParams: { q: value },
      });
    }
  }
}
