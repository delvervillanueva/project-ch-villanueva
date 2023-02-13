import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlumnosService } from '../../../servicios/alumnos.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-alumnos',
  templateUrl: './crear-alumnos.component.html',
  styleUrls: ['./crear-alumnos.component.css']
})
export class CrearAlumnosComponent {


  sexo: any[] = ['Masculino', 'Femenino'];

  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  agregarAlumno(value: string) {
    this.newItemEvent.emit(value);
  }

  crearAlumno: FormGroup;

  constructor( private fb: FormBuilder,
               private router: Router, 
               private  alumnosService: AlumnosService,
               private _snackBar : MatSnackBar) { 

    this.crearFormulario();
  }

  crearFormulario() {
    this.crearAlumno = this.fb.group({
       nombres: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
       correo: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
     });
   }

  ngOnInit(): void {
  }


  get nombreNoValido() {
    return this.crearAlumno.get('nombres')?.invalid && this.crearAlumno.get('nombres')?.touched
  }

  get correoNoValido() {
    return this.crearAlumno.get('correo')?.invalid && this.crearAlumno.get('correo')?.touched
  }

/*   get edadNoValido() {
    return this.crearAlumno.get('edad')?.invalid && this.crearAlumno.get('edad')?.touched
  }

  get sexoNoValido() {
    return this.crearAlumno.get('sexo')?.invalid && this.crearAlumno.get('sexo')?.touched
  }

  get promedioNoValido() {
    return this.crearAlumno.get('promedio')?.invalid && this.crearAlumno.get('promedio')?.touched
  }
 */
  agregarEditarCliente(){

  }

  goBack() {
    this.router.navigate(['/alumnos']);
    }

  editarAlumno()  {
  }

/*   guardar() {
    const alumno : ListaAlumnosModel = {
      id: this.crearAlumno.value.id,
      nombres: this.crearAlumno.value.nombres,
      grado: this.crearAlumno.value.grado,
      edad: this.crearAlumno.value.edad,
      sexo: this.crearAlumno.value.sexo,
      promedio:  this.crearAlumno.value.promedio,
    }

    this.alumnosService.agregarAlumno(alumno);
    this.router.navigate(['/list-alumnos']);

    this._snackBar.open('El Alumno fue agregado con éxito', '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });

  } */


}
