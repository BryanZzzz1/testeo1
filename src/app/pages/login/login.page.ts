import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  nombre:string="bryan";
  apellido:string="silva";
  edad:number=26;
  usuario:string ="pepe";

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
   

  constructor(private router:Router) { }



  ngOnInit() {
  }

  irPagina(){
    let navigationextras:NavigationExtras={
      state:{
        ed:this.edad,
        ap:this.apellido,
        user:this.usuario
      }
    }
    this.router.navigate(['/agregar'],navigationextras);


  }
}
