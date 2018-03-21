import { UserModel } from './../models/user.model';
import { Injectable } from '@angular/core';
import { RestResponse } from '../models/restResponse.model';
import { Observable } from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CreateUserService {

  constructor(private http : HttpClient) { }

  //Valida que el objeto contenga los campos obligatorios completados en el formulario
  public validate(user : UserModel) : boolean{
    let esValido = true;

    if(!user.nombre ){
      esValido = false;
    }

    if(!user.apellido ){
      esValido = false;
    }

    if(!user.email ){
      esValido = false;
    }

    return esValido;
  }

  //Guarda el objeto
  public saveOrUpdate(user : UserModel) : Observable<RestResponse>{
    
    return this.http.post<RestResponse>("http://localhost:8080/saveOrUpdate", JSON.stringify(user));

  }

}
