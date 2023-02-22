import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosNoCreativosComponent } from './alumnos-no-creativos/alumnos-no-creativos.component';

const routes: Routes = [
  { path: '', component: AlumnosNoCreativosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
