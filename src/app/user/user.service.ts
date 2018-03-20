import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UserModel } from '../models/user.model';

@Injectable()
export class UserService {

  private users: Array<UserModel>;
  constructor(private http:HttpClient) { }

  public getUsers(): Array<UserModel>{
    this.http.get("http://localhost:8000/getUsers").subscribe(res=>{
      this.users = res as UserModel[];
      console.log(this.users);

    });
    return this.users;
  }
}
