import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CursosService } from 'src/app/servicios/cursos.service';
import { ListaCursosModel } from 'src/app/interfaces/cursos.model';

@Component({
  selector: 'app-crar-cursos',
  templateUrl: './crar-cursos.component.html',
  styleUrls: ['./crar-cursos.component.css']
})
export class CrarCursosComponent {


  constructor(private fb: FormBuilder,
    private router: Router,
    private _cursosService: CursosService,
    private _snackBar: MatSnackBar) {

    this.crearCursos();
  }
  crearCurso: FormGroup;


  crearCursos() {
    this.crearCurso = this.fb.group({
      nombres: ['', Validators.required],
      grado: ['',  Validators.required],
      hora: ['',  Validators.required],
      promedio: ['',  Validators.required],
    });
  }


  get nombreNoValido() {
    return this.crearCurso.get('nombres')?.invalid && this.crearCurso.get('nombres')?.touched
  }

  get gradoNoValido() {
    return this.crearCurso.get('grado')?.invalid && this.crearCurso.get('grado')?.touched
  }

  get horaNoValido() {
    return this.crearCurso.get('hora')?.invalid && this.crearCurso.get('hora')?.touched
  }

  get promedioNoValido() {
    return this.crearCurso.get('promedio')?.invalid && this.crearCurso.get('promedio')?.touched
  }






  
  goBack() {
    this.router.navigate(['app/cursos']);
  }

  guardar() {
    const curso: ListaCursosModel = {
      id: this.crearCurso.value.id,
      nombres: this.crearCurso.value.nombres,
      grado: this.crearCurso.value.grado,
      hora: this.crearCurso.value.hora,
      promedio: this.crearCurso.value.promedio,


    }
    console.log(curso);

    this._cursosService.agregarCurso(curso);
    this.router.navigate(['/app/cursos']);

    this._snackBar.open('El curso fue agregado con éxito', '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });

  }


}
