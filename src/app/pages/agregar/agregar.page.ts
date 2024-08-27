import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {


  apellido:string='';
  edad!:number;
  user:string='';

  constructor(private router:Router, private activateroute:ActivatedRoute){
    this.activateroute.queryParams.subscribe(parametro=>{
      if(this.router.getCurrentNavigation()?.extras.state){

        this.edad=this.router.getCurrentNavigation()?.extras?.state?.['ed'];
        this.apellido=this.router.getCurrentNavigation()?.extras?.state?.['ap'];
        this.user=this.router.getCurrentNavigation()?.extras?.state?.['user'];
        

      }
    });

  }

  ngOnInit() {
  }

}
