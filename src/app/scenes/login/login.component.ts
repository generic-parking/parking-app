import { Component } from '@angular/core';
import { Login } from './model/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  constructor() { }

  doLogin(login: Login): void {
    console.log(login);
  }
}
