import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ListaCursosModel } from 'src/app/interfaces/cursos.model';
import { CursosService } from 'src/app/servicios/cursos.service';

@Component({
  selector: 'app-cursos-page',
  templateUrl: './cursos-page.component.html',
  styleUrls: ['./cursos-page.component.css']
})
export class CursosPageComponent {


  listCursos: ListaCursosModel[] = []
  displayedColumns: string[] = ['nombres', 'grado', 'edad', 'promedio', 'acciones'];
  dataSource : MatTableDataSource<any>;
  

  constructor(private _cursosService: CursosService, private _snackBar : MatSnackBar) { }

  ngOnInit(): void {
    this.cargarCursos();
  }

  cargarCursos() {
    this.listCursos = this._cursosService.getCursos();
    this.dataSource = new MatTableDataSource(this.listCursos);
  }

  addNewItem(res:any) {
    alert(res);
  }


  eliminarCurso(index: number) {
    console.log(index);

    this._cursosService.eliminarCurso(index);
    this.cargarCursos();

    this._snackBar.open('El Curso fue eliminado con éxito', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });

  }

}
