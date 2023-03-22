import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public isLogged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  login(){
    this.isLogged.next(true);
  }

  logout(){
    this.isLogged.next(false);
  }
}
