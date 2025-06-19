import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-calidad-imagen',
  templateUrl: './form-calidad-imagen.component.html',
  styleUrls: ['./form-calidad-imagen.component.css'],
  standalone: false
})
export class FormCalidadImagenComponent {
  formCalidadImagen: FormGroup;

  options = [0, 0.5, 1];

  ccQuestions = [
    { label: '1. Reproducción visualmente nítida del musculo pectoral', control: 'ccPectoral' },
    { label: '2. Reproducción visualmente nítida del tejido graso retro glandular', control: 'ccGrasoRetro' },
    { label: '3. Reproducción visualmente nítida del tejido graso mamario medial', control: 'ccGrasoMedial' },
    { label: '4. Reproducción visualmente nítida del tejido glandular lateral', control: 'ccGlandularLateral' },
    { label: '5. No hay pliegues en la piel', control: 'ccSinPliegues' },
    { label: '6. Imágenes simétricas de seno derecho y seno izquierdo', control: 'ccSimetricas' },
    { label: '7. Hay una diferencia mayor a 1 cm con la línea centro-pezón en la proyección MLO', control: 'ccDiferenciaCentroPezon' },
    { label: '8. El musculo pectoral está en el ángulo correcto', control: 'ccAnguloPectoral' }
  ];

  mloQuestions = [
    { label: '9. Se visualiza el ángulo infra mamario', control: 'mloAnguloInfra' },
    { label: '10. Reproducción visualmente nítida de la proyección del tejido cráneo glandular', control: 'mloCraneoGlandular' },
    { label: '11. Reproducción visualmente nítida de la proyección del tejido graso retroglandular', control: 'mloGrasoRetroglandular' },
    { label: '12. Pezón en perfil completo, claro que recubra el tejido mamario', control: 'mloPezonPerfil' },
    { label: '13. La línea centro-pezón toca el pectoral', control: 'mloLineaCentroPezon' },
    { label: '14. Imágenes simétricas', control: 'mloSimetricas' }
  ];

  criteriosExposicionQuestions = [
    { label: 'Visualización del contorno de la piel', control: 'expContornoPiel' },
    { label: 'Reproducción de las estructuras vasculares vistas a través de la mayor parte del parénquima denso', control: 'expEstructurasVasculares' },
    { label: 'Reproducción visualmente nítida de los vasos, bandas fibrosas y filamentos en la margen del musculo pectoral', control: 'expVasosBandasFilamentos' },
    { label: 'Reproducción visualmente nítida de la piel (roseta de los poros) a lo largo del musculo pectoral', control: 'expRosetaPiel' }
  ];

  constructor(private fb: FormBuilder) {
    this.formCalidadImagen = this.fb.group({
      estudioId: [''],
      fechaHoy: [{ value: this.getToday(), disabled: true }],
      ccPectoral: [null],
      ccGrasoRetro: [null],
      ccGrasoMedial: [null],
      ccGlandularLateral: [null],
      ccSinPliegues: [null],
      ccSimetricas: [null],
      ccDiferenciaCentroPezon: [null],
      ccAnguloPectoral: [null],
      mloAnguloInfra: [null],
      mloCraneoGlandular: [null],
      mloGrasoRetroglandular: [null],
      mloPezonPerfil: [null],
      mloLineaCentroPezon: [null],
      mloSimetricas: [null],
      expContornoPiel: [null],
      expEstructurasVasculares: [null],
      expVasosBandasFilamentos: [null],
      expRosetaPiel: [null],
      aceptableDiagnostico: [null],
      densidadMamaria: [null],
      birads: [null],
      hallazgoPredominante: [null],
      lateralidad: [null]
    });
  }

  getToday(): string {
    const today = new Date();
    return today.toISOString().substring(0, 10);
  }

  get promedioTotal(): number {
    const controls = [
      // CC
      'ccPectoral', 'ccGrasoRetro', 'ccGrasoMedial', 'ccGlandularLateral', 'ccSinPliegues', 'ccSimetricas', 'ccDiferenciaCentroPezon', 'ccAnguloPectoral',
      // MLO
      'mloAnguloInfra', 'mloCraneoGlandular', 'mloGrasoRetroglandular', 'mloPezonPerfil', 'mloLineaCentroPezon', 'mloSimetricas',
      // Exposición
      'expContornoPiel', 'expEstructurasVasculares', 'expVasosBandasFilamentos', 'expRosetaPiel'
    ];
    let sum = 0;
    let count = 0;
    controls.forEach(ctrl => {
      const val = Number(this.formCalidadImagen.get(ctrl)?.value);
      if (!isNaN(val)) {
        sum += val;
        count++;
      }
    });
    return count === 0 ? 0 : +(sum / 18).toFixed(2);
  }

  onSubmit() {
    if (this.formCalidadImagen.valid) {
      // Procesar datos
      console.log(this.formCalidadImagen.value);
    }
  }
}
