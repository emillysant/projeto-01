import { Component, Input } from '@angular/core';

@Component({
  selector: 'primeiro-componente',
  standalone: true,
  imports: [],
  templateUrl: './primeiro-componente.component.html',
  styleUrl: './primeiro-componente.component.css'
})
export class PrimeiroComponenteComponent {
  // @Input() nome:string = "";
  // @Input() email:string = "";
  // @Input() idade:number = 0;

  @Input() user = {
    nome: '',
    email: '',
    idade: 0
  }
  
}
