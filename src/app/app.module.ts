import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';import { NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Router, RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

const route:Routes=[
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  
  ],

  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    NgbAlertModule,
    RouterModule.forRoot(route),
    ReactiveFormsModule,
    HttpClientModule
    
    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
