import { Component } from '@angular/core';
import { Login } from './model/login';

import { LoginRestService } from '../../rest/login-rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [LoginRestService]
})
export class LoginComponent {

  constructor(private loginService: LoginRestService) { }

  doLogin(login: Login): void {
    this.loginService.doLogin(login).subscribe(data => {
      console.log(data);
      // busca dados do usuario
    });
  }
}
