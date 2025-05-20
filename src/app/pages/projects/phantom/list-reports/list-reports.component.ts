import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-reports',
  imports: [CommonModule, FormsModule],
  templateUrl: './list-reports.component.html',
  styleUrl: './list-reports.component.css'
})
export class ListReportsComponent {

  reports = [
    { id: '0001', mamografo: 'ABF07G', institucion: 'Institución 1', atia: 'false', tecnologo: 'Esteban Aristisabal', fechaCreacion: '2024-06-01' },
    { id: '0002', mamografo: 'ABF05G', institucion: 'Institución 2', atia: 'true', tecnologo: 'Kevin Perez', fechaCreacion: '2024-06-02' },
    { id: '0003', mamografo: 'ABF04G', institucion: 'Institución 3', atia: 'false', tecnologo: 'Usuario de prueba', fechaCreacion: '2024-06-03'  },
    { id: '0004', mamografo: 'ABF06G', institucion: 'Institución 4', atia: 'true', tecnologo: 'Adriana Beltran', fechaCreacion: '2024-06-04'  }
  ];

  selectedInstitucion: string = '';
  selectedFecha: string = '';
  selectedAtia: string = '';

  get instituciones(): string[] {
    return Array.from(new Set(this.reports.map(r => r.institucion)));
  }

  filteredReports() {
    return this.reports.filter(report =>
      (!this.selectedInstitucion || report.institucion === this.selectedInstitucion) &&
      (!this.selectedFecha || report.fechaCreacion === this.selectedFecha) &&
      (!this.selectedAtia || report.atia === this.selectedAtia)
    );
  }
}
