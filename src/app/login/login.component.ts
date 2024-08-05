import { Component, inject, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserInterface } from '../user-interface';
import { HttpClient } from '@angular/common/http';
import { AuthserviceService } from '../authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  fb=inject(FormBuilder);
  http=inject(HttpClient);
  authsrv=inject(AuthserviceService);
  router=inject(Router)

  form=this.fb.nonNullable.group({
    email:['',Validators.required],
    password:['',Validators.required]
  })

  
  // form:FormGroup;

  

  ngOnInit() {
    // this.form=new FormGroup({
    //   email:new FormControl('',[Validators.required,Validators.email]),
    //   password:new FormControl('',[Validators.required])
      
    // })
  }

  onSubmit(){
    this.http.post<{user:UserInterface}>('https://api.realworld.io/api/users/login',
      {user:this.form.getRawValue()}
    ).subscribe(response=>{
      // console.log('response',response);
      localStorage.setItem(this.form.value.email,response.user.token);
      this.authsrv.updateCurrentUser(response.user)
      this.router.navigateByUrl('/')

    })
    
  }



}


