import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  public isLogged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  login(){
    this.isLogged.next(true);
    this.router.navigateByUrl('home');
  }

  logout(){
    this.isLogged.next(false);
    this.router.navigateByUrl('login');
  }
}
