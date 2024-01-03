import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallePersonajesComponent } from './detalle-personajes.component';

const routes: Routes = [{ path: '', component: DetallePersonajesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetallePersonajesRoutingModule { }
