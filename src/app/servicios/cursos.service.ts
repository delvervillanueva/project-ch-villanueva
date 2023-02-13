import { Injectable } from '@angular/core';
import { ListaCursosModel } from '../interfaces/cursos.model';

@Injectable({
  providedIn: 'root'
})
export class CursosService {


  listaCursos: ListaCursosModel[] = 
  [
    { nombres: "Algebra", grado: "cuarto", hora: '08:00',  promedio: 11 },
    { nombres: "Educación física", grado: "quinto", hora: '8:00', promedio: 9 },
    { nombres: "Ciencias", grado: "segundo", hora: '10:00',promedio: 14 },
    { nombres: "Comunicación", grado: "cuarto", hora: '08:00',promedio: 7 },
    { nombres: "Arte y cultura", grado: "cuarto", hora: '15:00', promedio:18 },
    { nombres: "Matemática", grado: "quinto", hora: '9:00',promedio: 13 },
    { nombres: "Educación religiosa", grado: "cuarto", hora: '11:00', promedio: 17 },
    { nombres: "Arimética", grado: "seundo", hora: '7:30',promedio: 15 },
  ];
  
  getCursos() {
    return this.listaCursos.slice();
  }

  agregarCurso( nombre : ListaCursosModel ) {
    this.listaCursos.unshift( nombre );
  }

  eliminarCurso(index : number) {
    this.listaCursos.splice(index,1);
  }

}
