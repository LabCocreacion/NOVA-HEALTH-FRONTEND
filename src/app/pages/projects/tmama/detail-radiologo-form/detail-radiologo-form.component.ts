import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TamizacionMamaService } from 'src/app/core/services/tamizacion-mama/tamizacion-mama.service';
import { UserService } from 'src/app/core/services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-detail-radiologo-form',
  templateUrl: './detail-radiologo-form.component.html',
  styleUrl: './detail-radiologo-form.component.css',
  standalone: false
})
export class DetailRadiologoFormComponent implements OnInit {

  idForm?: String;
  num_identificacion_paciente?: String;
  institucion_prestadora?: String;

  radiologoForm: FormGroup;

  pacienteData: any;
  formularioData: any;
  institucionData: any;
  userData: any;

  constructor(
    private route: ActivatedRoute,
    private tamizacionMamaService: TamizacionMamaService,
    private fb: FormBuilder,
    private userService: UserService
  ) { 
    this.radiologoForm = this.fb.group({
      fechaTomaExamen: ['',],
      institucionPrestadora: ['',],
      ciudad: ['',],
      departamento: ['',],
      zona: ['',],
      nombres: ['',],
      apellidos: ['',],
      fechaNacimiento: ['',],
      tipoDocumento: ['',],
      numIdentificacionPaciente: ['',],
      eapb: ['',],
      regimen: ['',],
      tipoExamen: ['',],
      resultadoTamizacion: ['',],
      resultadoDiagnostica: ['',],
      resultadoEcografia: ['',],
      conductaSugerida: ['',],
      otraConducta: [''],
      nombreCompleto: [''],
      cargo: [''],
      correoElectronico: [''],
      telefonoContacto: [''],
      id_especialista: ['']
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.idForm = params.get('idForm')!;
      this.num_identificacion_paciente = params.get('num_identificacion_paciente')!;
      this.institucion_prestadora = params.get('institucion_prestadora')!;

      forkJoin({
        paciente: this.tamizacionMamaService.getPatientById(this.num_identificacion_paciente),
        formulario: this.tamizacionMamaService.getRadiologoFormById(this.idForm),
        institucion: this.tamizacionMamaService.getInstitucionByNames(this.institucion_prestadora)
      }).subscribe(({ paciente, formulario, institucion}) => {
        this.pacienteData = paciente;
        this.formularioData = formulario;
        this.institucionData = institucion;
        
        this.userService.getUserByIdentification(this.formularioData.id_especialista).subscribe(user => {
          this.userData = user;
          console.log('Paciente:', this.pacienteData);
          console.log('Formulario:', this.formularioData);
          console.log('Institucion:', this.institucionData);
          console.log('User:', this.userData);
  
          const fechaTomaExamen = new Date(this.formularioData.fecha_toma_examen).toISOString().split('T')[0];
          const fechaNacimiento = new Date(this.pacienteData.fecha_nacimiento).toISOString().split('T')[0];
  
          this.radiologoForm.patchValue({
            fechaTomaExamen: fechaTomaExamen,
            institucionPrestadora: this.institucionData.nombre,
            ciudad: this.formularioData.ciudad,
            departamento: this.formularioData.departamento,
            zona: this.formularioData.zona,
            nombres: this.pacienteData.nombres,
            apellidos: this.pacienteData.apellidos,
            fechaNacimiento: fechaNacimiento,
            tipoDocumento: this.pacienteData.tipo_documento,
            numIdentificacionPaciente: this.pacienteData.num_identificacion,
            eapb: this.pacienteData.eapb,
            regimen: this.pacienteData.regimen,
            tipoExamen: this.formularioData.tipo_examen,
            resultadoTamizacion: this.formularioData.resultado_mamog_tamizacion,
            resultadoDiagnostica: this.formularioData.resultado_mamog_diagnostica,
            resultadoEcografia: this.formularioData.resultado_mamog_mamaria,
            conductaSugerida: this.formularioData.conducta_sugerida,
            otraConducta: this.formularioData.otraConducta,
            nombreCompleto: this.userData.name + ' ' + this.userData.lastname,
            cargo: this.userData.rol,
            correoElectronico: this.userData.email,
            telefonoContacto: this.userData.numberphone,
            id_especialista: this.userData.id_especialista
          });
        });
      
      });
    });
  }

}
