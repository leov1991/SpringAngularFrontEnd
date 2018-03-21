import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UserModel } from '../models/user.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  
  constructor(private http : HttpClient) { }

  //Retorna un array observable de usuarios
  public getUsers(): Observable<UserModel[]>{
    return this.http.get<UserModel[]>("http://localhost:8080/getUsers");
    
  }
}
