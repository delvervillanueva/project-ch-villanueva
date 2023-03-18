import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosPageComponent } from './pages/cursos-page/cursos-page.component';
import { CrarCursosComponent } from './crar-cursos/crar-cursos.component';

const routes: Routes = [

  { path: '', component: CursosPageComponent },
  { path: 'crear-cursos', component: CrarCursosComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
