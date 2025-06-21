import { Component } from '@angular/core';

@Component({
  selector: 'app-form-reporte-biopsias',
  standalone: false,
  templateUrl: './form-reporte-biopsias.component.html',
  styleUrl: './form-reporte-biopsias.component.css'
})
export class FormReporteBiopsiasComponent {
  totalEstudios: number = 0;
  birads4A: number = 0;
  birads4B: number = 0;
  birads4C: number = 0;
  birads5: number = 0;
  biopsias: number = 0;
  resultadosPositivos: number = 0;
  noBiopsia: number = 0;
  seguimiento: number = 0;

  send() {
    const porcentajeBiopsias = this.totalEstudios > 0 ? (this.biopsias / this.totalEstudios) * 100 : 0;
    const porcentajePositivos = this.totalEstudios > 0 ? (this.resultadosPositivos / this.totalEstudios) * 100 : 0;
    const datos = {
      totalEstudios: this.totalEstudios,
      birads4A: this.birads4A,
      birads4B: this.birads4B,
      birads4C: this.birads4C,
      birads5: this.birads5,
      biopsias: this.biopsias,
      porcentajeBiopsias: porcentajeBiopsias,
      resultadosPositivos: this.resultadosPositivos,
      porcentajePositivos: porcentajePositivos,
      noBiopsia: this.noBiopsia,
      seguimiento: this.seguimiento
    };
    console.log('Datos del formulario de reporte de biopsias:', datos);
    // Aquí puedes enviar los datos a un servicio si lo deseas
  }
}
