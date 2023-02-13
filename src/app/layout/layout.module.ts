import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { MenuIzqComponent } from './components/menu-izq/menu-izq.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../shared/modules/angular-material.module';



@NgModule({
  declarations: [
    LayoutComponent,
    MenuIzqComponent,
    NavbarComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule
  ],
  exports: [
    MenuIzqComponent,
    ToolbarComponent

  ]
})
export class LayoutModule { }
