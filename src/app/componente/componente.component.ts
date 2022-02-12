import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-componente',
  templateUrl: './componente.component.html',
  styleUrls: ['./componente.component.css']
}) 
export class ComponenteComponent implements OnInit {
  @ViewChild('cambiarTamaño') cambiarTamaño!:ElementRef<HTMLHtmlElement>;

  constructor() { 
    //cambiar el height del elemento cuando la pantalla se vuelve ma chica
   
  }

  ngOnInit(): void {
  }
  onResize(event:any){
 

    if(event.target.innerWidth < 600){
      this.cambiarTamaño.nativeElement.className = "h-100 row justify-content-center"

    }else{
      this.cambiarTamaño.nativeElement.className = "h-75 w-75 row justify-content-center"

    }
  }

}
