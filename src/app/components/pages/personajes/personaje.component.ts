import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { Personaje } from "@app/shared/components/interfaces/info_personajes";

@Component({
  selector: 'app-personaje',
  //Codigo HTML utilizado para cargar la informacion del modelo de los personajes y ponerlos en una card
  template: `
    <div class="card">
      <div class="image">
        <a [routerLink]="['/detalle_personajes', personaje.id]">
          <img
            [src]="personaje.image"
            [alt]="personaje.name"
            class="card-img-top"
          />
        </a>
      </div>
      <div class="card-inner">
        <div class="header">
          <a [routerLink]="['/detalle_personajes', personaje.id]">
            <h2>{{personaje.name | slice: 0:15}}</h2>
          </a>
          <h4 class="text-muted">Status: {{personaje.status}}</h4>
        </div>
      </div>
    </div>
  `,
  changeDetection:ChangeDetectionStrategy.OnPush
})

export class PersonajeComponent{
  @Input()personaje:Personaje;
}
