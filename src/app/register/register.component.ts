import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserInterface } from '../user-interface';
import { AuthserviceService } from '../authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  fb=inject(FormBuilder)
  http=inject(HttpClient);
  authsrv=inject(AuthserviceService);
  router=inject(Router)


  form=this.fb.nonNullable.group({
    username:['',Validators.required],
    email:['',Validators.required,Validators.email],
    password:['',Validators.required]
  })

  onSubmit(){
    this.http.post<{user:UserInterface}>('https://api.realworld.io/api/users',
      {user:this.form.getRawValue()}
    ).subscribe(response=>{
      // console.log('response',response);
      localStorage.setItem(this.form.value.email,response.user.token);
      this.authsrv.updateCurrentUser(response.user)
      this.router.navigateByUrl('/')

    })
    
  }



}



