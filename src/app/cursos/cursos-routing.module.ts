import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosPageComponent } from './pages/cursos-page/cursos-page.component';

const routes: Routes = [

  { path: '', component: CursosPageComponent },
  { path: 'cursos-alumnos', component: CursosPageComponent },
 { path: '**', redirectTo: 'cursos-alumnos' },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
