import { User } from './../models/User';
import { Injectable } from '@angular/core';
import { HttpBaseService } from './http/http-base.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService extends HttpBaseService {

  public getUser(): Observable<User> {
    return this.get("/api/proprietario").map((response) => response.json());
  }

  public save(user: User): Observable<User> {
    if(user.id){
      // return this.put("/api/proprietario", user).map((response) => response.json());
      return this.post("/api/proprietario", user).map((response) => response.json());
    }else{
      return this.post("/api/proprietario", user).map((response) => response.json());
    }
  }
}
