import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formulario: FormGroup;
  public imagenURL: string;

  constructor(
    private router: Router,
    private authSvc: AuthenticationService,
    private fb : FormBuilder

  ) {}
  
  public loginForm = this.fb.group({
    username: ['', [Validators.required] ],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });

  ngOnInit(): void {

    //Para un ingreso directo, descomentear el siguiente código//
   /*  const userData = {
      username: 'test',
      password: '12345678'
    };
    this.authSvc.login(userData).subscribe((res) => console.log('Login'));
    */
  }

  onLogin(): void {
    const formValue = this.loginForm.value;
    this.authSvc.login(formValue).subscribe((res) => {
      if (res) {
        this.router.navigate(['app']);
      }
    })
  }

  getErrorMessage(field: string): string {
    let message
    if( this.loginForm.get(field).errors.required) {
      message = "Debe ingresar algun valor";
    } else if (this.loginForm.get(field).hasError('minlength')) {
      const minLength = this.loginForm.get(field).errors?.minlength.requiredLength;
      message = `Este campo debe contener al menos ${minLength} caractéres`;
    }
    return message;
  }

  isValidField(field: string): boolean {
    return(
    (this.loginForm.get(field).touched || this.loginForm.get(field).dirty)  && 
    !this.loginForm.get(field).valid
    );
  }
  
}