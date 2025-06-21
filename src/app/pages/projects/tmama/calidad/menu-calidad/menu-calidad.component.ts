import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-calidad',
  standalone: false,
  templateUrl: './menu-calidad.component.html',
  styleUrls: ['./menu-calidad.component.css']
})
export class MenuCalidadComponent {
  opcionSeleccionada: string | null = null;

  seleccionarOpcion(valor: string) {
    this.opcionSeleccionada = valor;
  }
}
