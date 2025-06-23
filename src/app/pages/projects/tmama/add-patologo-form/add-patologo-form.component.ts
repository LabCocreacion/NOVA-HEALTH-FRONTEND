import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/core/services/login/login.service';

@Component({
  selector: 'app-add-patologo-form',
  templateUrl: './add-patologo-form.component.html',
  styleUrls: ['./add-patologo-form.component.css'],
  standalone: false

})
export class AddPatologoFormComponent {
  patologoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService) {
    const today = new Date();
    const todayStr = today.toISOString().substring(0, 10);
    this.patologoForm = this.fb.group({
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
      tipoBiopsia: [''],
      // Lesiones proliferativas
      hiperplasiaDuctal: [false],
      lesionCelulasColumnar: [false],
      adenosis: [false],
      lesionEsclerosante: [false],
      // Lesiones fibroepiteliales
      fibroadenoma: [false],
      phyllodesBenigno: [false],
      phyllodesBorderline: [false],
      phyllodesMaligno: [false],
      hamartoma: [false],
      // Lesiones papilares
      lesionPapilar: [''],
      // Lesiones intraductuales
      lesionIntraductual: [''],
      // Neoplasia lobulillar no invasiva
      neoplasiaLobulillar: [''],
      // Carcinoma infiltrante
      carcinomaDuctal: [false],
      carcinomaLobulillar: [false],
      otrosCarcinomas: [false],
      // Otros
      muestraNoSignificativa: [false],
      biopsiaNoRepresentativa: [false],
      otrosResultado: [false],
      otrosResultadoCual: [''],

      // Conducta sugerida
      solicitudMarcadores: [false],
      solicitudBiomarcadores: [false],
      repetirBiopsia: [false],
      reseccionCompleta: [false],
      remisionCirujano: [false],
      otraConducta: [false],
      otraConductaCual: [''],
      ningunaConducta: [false],

      // Quien Diligenció
      nombreCompleto: [''],
      cargo: [''],
      correoElectronico: [''],
      telefonoContacto: ['']
    });
  }

  onSubmit() {
    if (this.patologoForm.valid) {
      // Procesar datos del formulario
      console.log(this.patologoForm.value);
    }
  }
}
