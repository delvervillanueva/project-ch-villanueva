import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ListaAlumnosModel } from '../../../../app/interfaces/alumnos.model';
import { Store } from '@ngrx/store';
import { loadAlumnoss } from '../../store/alumnos.actions';
import { selectAlumnosArray, selectAlumnosState, selectTotalAlumnosNumber } from '../../store/alumnos.selectors';
import { PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { AlumnosService } from 'src/app/servicios/alumnos.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-alumnos-page',
  templateUrl: './alumnos-page.component.html',
  styleUrls: ['./alumnos-page.component.css']
})
export class AlumnosPageComponent  implements OnInit {

  listAlumnos: ListaAlumnosModel[] = []
  displayedColumns: string[] = ['id', 'name', 'email', 'acciones'];
  totalAlumnos: Observable<number>;
  public perPage = 6;
  public perPageOptions = [3, 6, 12, 18];

  dataSource : MatTableDataSource<any>;

  constructor( private store: Store, private _alumnosService: AlumnosService, private _snackBar : MatSnackBar ){
    this.totalAlumnos = this.store.select(selectTotalAlumnosNumber);
  }

  ngOnInit(): void {
    this.store.dispatch(loadAlumnoss({page: 1, per_page: this.perPage}));

    this.store.select(selectAlumnosArray).subscribe((listAlumnos) => {
      this.listAlumnos = listAlumnos
    })

  }

  onPageChange(ev: PageEvent){
   this.store.dispatch(loadAlumnoss({page: ev.pageIndex + 1, per_page: ev.pageSize}))
  }

  eliminarAlumno(index: any): void {
    this._alumnosService.eliminarAlumno(index);

    this._snackBar.open('El Curso fue eliminado con éxito', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });

  }

}
