import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'home',
    loadChildren: () =>
    import(
      './components/pages/home/home.module'
    ).then(m => m.HomeModule)
  },
  {
    path: 'lista_personajes',
    loadChildren: () =>
    import(
      './components/pages/personajes/lista-personajes/lista-personajes.module'
    ).then(m => m.ListaPersonajesModule)
  },
  {
    path: 'detalle_personajes/:id',
    loadChildren: () =>
    import(
      './components/pages/personajes/detalle-personajes/detalle-personajes.module'
    ).then(m => m.DetallePersonajesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
