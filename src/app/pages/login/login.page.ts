import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  nombre:string="bryan";
  apellido:string="silva";
  edad:number=26;
  usuario:string ="";

  Persona: any={
    nombre:'bryan',
    apellido:'silva',
    edad:26
  }
  Animal:any={
    raza:'pastor aleman',
    nombre:'elpepe'
  }

  lista:any=[
    {
      id:1,
      nombre:'raul'
    },
    {
      id:2,
      nombre:'pepe'
    }
  ]
   

  constructor() { }

  ngOnInit() {
  }

}
