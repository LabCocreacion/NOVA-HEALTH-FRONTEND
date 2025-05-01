import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-calidad-phantom',
  templateUrl: './list-calidad-phantom.component.html',
  styleUrl: './list-calidad-phantom.component.css',
  standalone: false
})
export class ListCalidadPhantomComponent {

  constructor(private router: Router) {}

  months: string[] = [
    'Enero', 'Febrero', 'Marzo', 'Abril',
    'Mayo', 'Junio', 'Julio', 'Agosto',
    'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  selectMonth(month: string): void {
    console.log('Mes seleccionado:', month);
    // Redirigir a la ruta exacta definida en el módulo
    this.router.navigate(['/tamizacion-mama/dashboard-calidad/add-form-calidad'], { queryParams: { month } });
  }

}
