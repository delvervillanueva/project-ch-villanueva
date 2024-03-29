import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosPageComponent } from './pages/cursos-page/cursos-page.component';
import { CrarCursosComponent } from './crar-cursos/crar-cursos.component';
import { AngularMaterialModule } from '../shared/modules/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CursosPageComponent,
    CrarCursosComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class CursosModule { }
