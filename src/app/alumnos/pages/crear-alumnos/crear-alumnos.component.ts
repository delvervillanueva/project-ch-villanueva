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

  agregarEditarCliente(){

  }

  goBack() {
    this.router.navigate(['/alumnos']);
    }

  editarAlumno()  {
  }


}
