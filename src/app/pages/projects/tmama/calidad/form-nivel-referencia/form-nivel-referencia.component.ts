import { Component } from '@angular/core';

@Component({
  selector: 'app-form-nivel-referencia',
  standalone: false,
  templateUrl: './form-nivel-referencia.component.html',
  styleUrl: './form-nivel-referencia.component.css'
})
export class FormNivelReferenciaComponent {
  activeTab = 0;
  espesores = [
    { label: '5-7 cm', value: '5-7' },
    { label: '7-9 cm', value: '7-9' },
    { label: '9-11 cm', value: '9-11' }
  ];

  estudiosPorEspesor = [
    Array.from({ length: 15 }, () => ({ fecha: '', id: '', dosis: '', imagenes: '' })),
    Array.from({ length: 15 }, () => ({ fecha: '', id: '', dosis: '', imagenes: '' })),
    Array.from({ length: 15 }, () => ({ fecha: '', id: '', dosis: '', imagenes: '' }))
  ];

  errores: { [key: number]: { [campo: string]: boolean } } = {};

  validarCampos(): boolean {
    this.errores = {};
    let valido = true;
    const estudios = this.estudiosPorEspesor[this.activeTab];
    estudios.forEach((estudio, idx) => {
      this.errores[idx] = {};
      if (!estudio['fecha']) { this.errores[idx]['fecha'] = true; valido = false; }
      if (!estudio['id']) { this.errores[idx]['id'] = true; valido = false; }
      if (!estudio['dosis']) { this.errores[idx]['dosis'] = true; valido = false; }
      if (!estudio['imagenes']) { this.errores[idx]['imagenes'] = true; valido = false; }
    });
    return valido;
  }

  send() {
    if (!this.validarCampos()) {
      // No enviar, hay errores
      return;
    }
    console.log('Datos del formulario:', this.estudiosPorEspesor);
    // Aquí puedes enviar los datos a un servicio
  }
}
