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
      this.router.navigate(['/tamizacion-mama/dashboard-calidad/add-form-calidad'], { queryParams: { month } });
    } else if (this.tipo === 'indiceRechazo') {
      this.router.navigate(['/tamizacion-mama/dashboard-calidad/form-indice-rechazo'], { queryParams: { month } });
    } else if (this.tipo === 'proporcionBirads') {
      this.router.navigate(['/tamizacion-mama/dashboard-calidad/form-proporcion-birads'], { queryParams: { month } });
    } else if (this.tipo === 'reportesBoipsias') {
      this.router.navigate(['/tamizacion-mama/dashboard-calidad/form-reporte-biopsias'], { queryParams: { month } });
    } else if (this.tipo === 'formulariosRellenado') {
      this.router.navigate(['/tamizacion-mama/dashboard-calidad/form-rellenado'], { queryParams: { month } });
    }
  }
}
