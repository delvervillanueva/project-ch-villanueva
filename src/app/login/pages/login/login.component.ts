import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public formulario: FormGroup;
  public imagenURL: string;

  constructor(
    private router: Router
  ) {}
  
  ngOnInit(): void {
    this.formulario = new FormGroup({
      email: new FormControl(''/* , [Validators.required, Validators.email] */),
      password: new FormControl(''/* , [Validators.required] */),
    });
  }

  public onSubmit(): void {
    this.router.navigate(['/alumnos']);
    
  }

}
