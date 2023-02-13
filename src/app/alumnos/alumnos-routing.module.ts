import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosPageComponent } from './pages/alumnos-page/alumnos-page.component';
import { CrearAlumnosComponent } from './pages/crear-alumnos/crear-alumnos.component';


const routes: Routes = [

      { path: '', component: AlumnosPageComponent },
      { path: 'crear-alumnos', component: CrearAlumnosComponent },
     { path: '**', redirectTo: 'alumnos' },
     
  
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]  
})
export class AlumnosRoutingModule { }
