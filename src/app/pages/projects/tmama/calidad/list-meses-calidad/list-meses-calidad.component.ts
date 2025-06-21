import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-meses-calidad',
  standalone: false,
  templateUrl: './list-meses-calidad.component.html',
  styleUrl: './list-meses-calidad.component.css'
})
export class ListMesesCalidadComponent {
  @Input() tipo: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Aquí podrías realizar alguna acción inicial si es necesario
    console.log('Componente ListMesesCalidadComponent inicializado con tipo:', this.tipo);
  }

  months: string[] = [
    'Enero', 'Febrero', 'Marzo', 'Abril',
    'Mayo', 'Junio', 'Julio', 'Agosto',
    'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  selectMonth(month: string): void {
    if (this.tipo === 'calidadPhantom'){
      // Redirigir a la ruta exacta definida en el módulo
      this.router.navigate(['/tamizacion-mama/dashboard-calidad/add-form-calidad'], { queryParams: { month } });
    } else if (this.tipo === 'indiceRechazo') {
      // Redirigir a la ruta exacta definida en el módulo
      this.router.navigate(['/tamizacion-mama/dashboard-calidad/form-indice-rechazo'], { queryParams: { month } });
    }
  }

}
