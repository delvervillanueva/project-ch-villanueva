import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/login/services/authentication.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit  {

  constructor(private authSvc: AuthenticationService) { }

  ngOnInit(): void {
  }


  onLogout(): void {
    this.authSvc.logout();
  }

}
