import { Component, inject } from '@angular/core';
import { AuthserviceService } from './authservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  authsrv=inject(AuthserviceService);

  logout(){

  }
  
}
