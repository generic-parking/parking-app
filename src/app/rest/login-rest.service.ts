import { Injectable } from '@angular/core';
import { Http,  Response } from '@angular/http';
import { Login } from '../scenes/login/model/login';

@Injectable()
export class LoginRestService {

  constructor(private http: Http) { }

  doLogin(login: Login) {
   return this.http.post('/get/login', login).subscribe(data => {
    return data.json()
   });
  }
}
