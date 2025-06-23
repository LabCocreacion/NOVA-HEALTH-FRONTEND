import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-cirujano-form',
  standalone: false,
  templateUrl: './add-cirujano-form.component.html',
  styleUrls: ['./add-cirujano-form.component.css']
})
export class AddCirujanoFormComponent {
  cirujanoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    const today = new Date();
    const todayStr = today.toISOString().substring(0, 10);
    this.cirujanoForm = this.fb.group({
      // Datos toma Examen
      fechaTomaExamen: [todayStr],
      institucionPrestadora: [''],
      ciudad: [''],
      departamento: [''],
      zona: [''],

      // Datos de Identificación
      nombres: [''],
      apellidos: [''],
      fechaNacimiento: [''],
      tipoDocumento: [''],
      numIdentificacionPaciente: [''],
      eapb: [''],
      regimen: [''],

      // Examen
      motivoRemision: [''],
      motivoRemisionOtra: [''],
      conductaCirujano: [''],
      conductaCirujanoOtra: [''],
      estadificacionClinica: [''],
      cirugiaTratamientoInicial: [false],
      quimioterapiaNeoadyuvante: [false],
      hormonoNeoadyuvante: [false],
      quimioterapiaPrimaria: [false],
      hormonoPrimaria: [false],
      radioterapiaPaliativa: [false],
      tratamientoOtra: [false],
      tratamientoOtraCual: [''],
      tratamientoNinguna: [false],
      tratamientoSinDato: [false],
      fechaInicioTratamiento: [''],

      // Quien Diligenció
      nombreCompleto: [''],
      cargo: [''],
      correoElectronico: [''],
      telefonoContacto: ['']
    });
  }

  onSubmit() {
    if (this.cirujanoForm.valid) {
      // Procesar datos del formulario
      console.log(this.cirujanoForm.value);
    }
  }
}
