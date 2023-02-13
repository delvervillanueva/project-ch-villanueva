import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosPageComponent } from './pages/alumnos-page/alumnos-page.component';
import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AngularMaterialModule } from '../shared/modules/angular-material.module';
import {OverlayModule} from '@angular/cdk/overlay';
import { CrearAlumnosComponent } from './pages/crear-alumnos/crear-alumnos.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AlumnosPageComponent,
    CrearAlumnosComponent
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    AngularMaterialModule,
    OverlayModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class AlumnosModule { }
