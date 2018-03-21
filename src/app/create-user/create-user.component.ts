import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { CreateUserService } from './create-user.service';
import { UserModel } from './../models/user.model';
import { OK } from "./../models/httpStatus";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
  providers: [ CreateUserService ]
})
export class CreateUserComponent implements OnInit {
  private user: UserModel;
  private esValido: boolean = true;
  private mensaje: string = "";

  constructor(private service: CreateUserService, private router : Router) { 
    this.user = new UserModel();
  }

  ngOnInit() {
  }

  public saveOrUpdate(): void{
    this.esValido = this.service.validate(this.user)
    if(this.esValido){
      this.service.saveOrUpdate(this.user).subscribe(res=>{
        if(res.responseCode == OK){
          this.router.navigate(['/userComponent']);
        } else{
          this.mensaje = res.mensaje
          this.esValido = false;
        }

      });
    } else{
      this.mensaje = "Los campos con asteriscos son obligatorios";
    }


  }

}
