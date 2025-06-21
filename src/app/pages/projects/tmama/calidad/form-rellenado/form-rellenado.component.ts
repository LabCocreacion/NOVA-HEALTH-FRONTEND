import { Component } from '@angular/core';

@Component({
  selector: 'app-form-rellenado',
  standalone: false,
  templateUrl: './form-rellenado.component.html',
  styleUrl: './form-rellenado.component.css'
})
export class FormRellenadoComponent {
  totalEstudios: number = 0;
  rellamados: number = 0;
}
