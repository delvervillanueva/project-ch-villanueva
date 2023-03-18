import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuIzqComponent } from './components/menu-izq/menu-izq.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../shared/modules/angular-material.module';
import { LayoutComponent } from './components/layout/layout.component';
import { LayoutRoutingModule } from './layout-routing.module';



@NgModule({
  declarations: [
    MenuIzqComponent,
    NavbarComponent,
    ToolbarComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule,
    LayoutRoutingModule
  ],

})
export class LayoutModule { }
