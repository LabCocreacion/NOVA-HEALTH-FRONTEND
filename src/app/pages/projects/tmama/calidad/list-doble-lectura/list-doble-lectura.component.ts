import { Component } from '@angular/core';

@Component({
  selector: 'app-list-doble-lectura',
  standalone: false,
  templateUrl: './list-doble-lectura.component.html',
  styleUrl: './list-doble-lectura.component.css'
})
export class ListDobleLecturaComponent {
  currentYear = new Date().getFullYear();
  trimestres = [
    { label: 'Primer Trimestre', value: 1 },
    { label: 'Segundo Trimestre', value: 2 },
    { label: 'Tercer Trimestre', value: 3 },
    { label: 'Cuarto Trimestre', value: 4 }
  ];
}
