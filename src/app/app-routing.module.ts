import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermisosGuard } from './shared/guards/permisos.guard';



const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'app',
    loadChildren: () => import('./layout/layout.module').then((m) => m.LayoutModule,),canActivate: [PermisosGuard]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
