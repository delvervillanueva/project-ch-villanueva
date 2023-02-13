import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ListaAlumnosModel } from '../../../../app/interfaces/alumnos.model';
import { Store } from '@ngrx/store';
import { loadAlumnoss } from '../../store/alumnos.actions';
import { selectAlumnosArray, selectAlumnosState, selectTotalAlumnosNumber } from '../../store/alumnos.selectors';
import { PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-alumnos-page',
  templateUrl: './alumnos-page.component.html',
  styleUrls: ['./alumnos-page.component.css']
})
export class AlumnosPageComponent  implements OnInit {

  listAlumnos: ListaAlumnosModel[] = []
  //displayedColumns: string[] = ['nombres', 'grado', 'edad', 'sexo', 'promedio', 'acciones'];
  displayedColumns: string[] = ['id', 'name', 'email', 'acciones'];
  totalAlumnos: Observable<number>;
  public perPage = 6;
  public perPageOptions = [3, 6, 12, 18];

  dataSource : MatTableDataSource<any>;

  constructor( private store: Store){
    this.totalAlumnos = this.store.select(selectTotalAlumnosNumber);
  }

  ngOnInit(): void {
    this.store.dispatch(loadAlumnoss({page: 1, per_page: this.perPage}));

    this.store.select(selectAlumnosArray).subscribe((listAlumnos) => {
      this.listAlumnos = listAlumnos
    })

    
  }


  onPageChange(ev: PageEvent){
   // console.log(ev);
   this.store.dispatch(loadAlumnoss({page: ev.pageIndex + 1, per_page: ev.pageSize}))

  }


  eliminarAlumno(id: any): void {
    console.log(id);
/*     if(confirm('Estás de Eliminar a Alumno')) {
      this._alumnosService.eliminarAlumno(id).subscribe(()=> {
      const tempArr = this.listAlumnos.filter(alumno => alumno.id !== id);
      this.listAlumnos = [...tempArr];
    });
  }
    this.cargarAlumnos();

    this._snackBar.open('El Alumno fue eliminado con éxito', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    }); */
  }

}
