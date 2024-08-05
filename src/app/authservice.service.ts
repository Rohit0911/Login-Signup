import { Injectable } from '@angular/core';
import { UserInterface } from './user-interface';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor() { }

  // currentUserSig= signal<UserInterface |undefined|null>(undefined);

  private currentUserSig =new BehaviorSubject<UserInterface |undefined|null>(undefined);
  current$=this.currentUserSig.asObservable();



  updateCurrentUser(user:UserInterface|undefined|null){
    this.currentUserSig.next(user);
  }


}
