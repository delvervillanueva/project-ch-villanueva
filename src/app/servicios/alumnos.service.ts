import { Injectable } from '@angular/core';
import { ListaAlumnosModel } from '../interfaces/alumnos.model';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  public listaAlumnos$: Observable<ListaAlumnosModel[]>;
  public listaAlumnos: ListaAlumnosModel[] = [];
  private alumnos = new BehaviorSubject<ListaAlumnosModel[]>([]);
  
  //alumnos$ = this.alumnos.asObservable();

  constructor(private http: HttpClient) {

   // this.getAlumnos()
   this.listaAlumnos$ = this.alumnos.asObservable();
    this.getAlumnos().subscribe(alu => {
      this.alumnos.next(alu)
    })
  }


  private readonly API = environment.api;
  
  getAlumnos(): Observable<ListaAlumnosModel[]> {
    return this.http.get<ListaAlumnosModel[]>(this.API);
  }

 /*  agregarAlumno( nombre : ListaAlumnosModel ) {
    this.listaAlumnos.unshift( nombre );
  } */

  eliminarAlumno(id : any): Observable<void> {
   console.log(id)
   return this.http.delete<void>(`${this.API}/${id}`);
  }

}