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
  
  constructor(private http: HttpClient) {

   this.listaAlumnos$ = this.alumnos.asObservable();
    this.getAlumnos().subscribe(alu => {
      this.alumnos.next(alu)
    })
  }

  private readonly API = environment.api;
  
  getAlumnos(): Observable<ListaAlumnosModel[]> {
    return this.http.get<ListaAlumnosModel[]>(this.API);
  }

  eliminarAlumno(index : any) {
    this.listaAlumnos.splice(index, 1);

  }

}