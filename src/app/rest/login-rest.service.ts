import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Login } from '../scenes/login/model/login';

@Injectable()
export class LoginRestService {

  constructor(private http: Http) { }

  doLogin(login: Login) {
    const formData = "username=" + login.username + "&password=" + login.password;
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post('/api/login', formData,  options).subscribe(data => {
      console.log(data);
      return data.json()
    });
  }

}