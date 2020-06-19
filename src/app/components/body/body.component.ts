import {Component} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})

export class BodyComponent{

  mostrar:boolean = true;
  frase = {
    mensaje: 'Un gran heroe requiere una responsabilidad :v',
    author: 'Ben Parker',
    tipo: typeof(this)
  };

  personajes:string[] = ['spiderman','Octopues','Venom']

  ngOnInit(){
    console.log(this.frase);
  }
  
}