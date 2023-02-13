import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then((module) => module.LoginModule),
    data: {
      nombre: 'Login'
    }
  },
  {
    path: 'alumnos',
    loadChildren: () => import('./alumnos/alumnos.module').then((module) => module.AlumnosModule),
    data: {
      nombre: 'Alumnos'
    }
  },
  {
    path: 'cursos-alumnos',
    loadChildren: () => import('./cursos/cursos.module').then(module => module.CursosModule),
    data: {
      nombre: 'Cursos'
    }
  },

  {
    path: 'login',
    component: LayoutComponent,
    children:
    [
      {
        path: 'alumnos',
        loadChildren: () => import('./alumnos/alumnos.module').then(module => module.AlumnosModule),
        data: {
          nombre: 'Alumnos'
        }
      },
   /*    {
        path: 'cursos-alumnos',
        loadChildren: () => import('./cursos/cursos.module').then(module => module.CursosModule),
        data: {
          nombre: 'Cursos'
        }
      } */
    ]
  },

  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
