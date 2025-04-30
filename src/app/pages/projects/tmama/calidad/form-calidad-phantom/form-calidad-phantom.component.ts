import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-calidad-phantom',
  templateUrl: './form-calidad-phantom.component.html',
  styleUrl: './form-calidad-phantom.component.css',
  standalone: false
})
export class FormCalidadPhantomComponent {

  formCalidadPhantom!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formCalidadPhantom = this.fb.group({
      fechaPrueba: ['', Validators.required],
      idImagen: ['', Validators.required],
      modoExposicion: ['', Validators.required],
      modoAnodo: ['', Validators.required],
      mAs: ['', [Validators.required, Validators.min(0)]],
      kVp: ['', [Validators.required, Validators.min(0)]],
      numMicros: ['', [Validators.required, Validators.min(0)]],
      numMasas: ['', [Validators.required, Validators.min(0)]],
      numFibras: ['', [Validators.required, Validators.min(0)]],
      visualizacionArtefactos: ['', Validators.required],
      descripcionArtefacto: [''],
      cumplimiento: ['', Validators.required],
      fechaMantenimiento: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.formCalidadPhantom.valid) {
      console.log('Formulario enviado:', this.formCalidadPhantom.value);
    } else {
      console.log('Formulario inválido');
    }
  }

}
