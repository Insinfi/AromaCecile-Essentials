import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  password:string = '';
  email:string = '';

  constructor(private authService: AuthService){}

  login(){
    console.log('Login');
    this.authService.login();
  }
}
