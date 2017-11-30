import { Subscribable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from './model/login';

import { LoginRestService } from '../../rest/login-rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [LoginRestService]
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginRestService, private router: Router) { }

  redirectToDefault() {
    this.router.navigate(['/profile']);
  }

  doLogin(login: Login): void {
    this.loginService.doLogin(login).subscribe(data => {
      this.redirectToDefault();
    });
  }

  ngOnInit() {
    this.loginService.doCheckIsLogged().subscribe(isLogged => {
      if (isLogged) {
        this.redirectToDefault();
      }
    });
  }
}
