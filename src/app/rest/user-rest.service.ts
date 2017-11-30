import { User } from './../models/User';
import { Subscribable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { directiveDef } from '@angular/core/src/view/provider';

@Injectable()
export class UserRestService {

  constructor(private http: Http) { }

  getUser(): Subscribable<User> {
    return this.http.get('/api/proprietario').map( response => response.json());
  }
}
