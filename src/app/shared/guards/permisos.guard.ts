import { Injectable } from '@angular/core';
import {  CanActivate } from '@angular/router';
import { AuthenticationService } from 'src/app/login/services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class PermisosGuard implements CanActivate {

  constructor( private auth: AuthenticationService){}



  canActivate(): boolean {
    console.log('Guard');

    return this.auth.estaAtutenticado();
  }
  


}
