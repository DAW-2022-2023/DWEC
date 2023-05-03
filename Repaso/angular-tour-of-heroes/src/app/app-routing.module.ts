import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { FormularioComponent } from './components/formulario/formulario.component';


const routes: Routes = [
  {
    path: "busqueda",
    component: BusquedaComponent
  },
  {
    path: "formulario",
    component: FormularioComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
