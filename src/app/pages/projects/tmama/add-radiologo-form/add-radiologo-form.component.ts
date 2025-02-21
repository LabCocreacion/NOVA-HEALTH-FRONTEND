import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TamizacionMamaService } from 'src/app/core/services/tamizacion-mama/tamizacion-mama.service';
import { LoginService } from 'src/app/core/services/login/login.service';
import { Patient } from 'src/app/core/models/patient.model';
import { ActivatedRoute } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-add-radiologo-form',
  templateUrl: './add-radiologo-form.component.html',
  styleUrls: ['./add-radiologo-form.component.css'],
  standalone: false
})
export class AddRadiologoFormComponent implements OnInit {

  radiologoForm: FormGroup;
  userInfo: any;
  num_identificacion_paciente?: String;
  id_paciente_get?: number;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private tamizacionMamaService: TamizacionMamaService,
    private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.radiologoForm = this.fb.group({
      fechaTomaExamen: ['', Validators.required],
      institucionPrestadora: ['', Validators.required],
      ciudad: ['', Validators.required],
      departamento: ['', Validators.required],
      zona: ['', Validators.required],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      tipoDocumento: ['', Validators.required],
      numIdentificacionPaciente: ['', Validators.required],
      eapb: ['', Validators.required],
      regimen: ['', Validators.required],
      tipoExamen: ['', Validators.required],
      resultadoTamizacion: ['', Validators.required],
      resultadoDiagnostica: ['', Validators.required],
      resultadoEcografia: ['', Validators.required],
      conductaSugerida: ['', Validators.required],
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
      this.num_identificacion_paciente = params.get('num_identificacion_paciente')!;
      console.log('ID del Paciente:', this.num_identificacion_paciente);
      if (this.num_identificacion_paciente) {
        this.tamizacionMamaService.getPatientById(this.num_identificacion_paciente).subscribe(
          response => {
            console.log('Paciente encontrado:', response);
            this.radiologoForm.patchValue({
              nombres: response.nombres,
              apellidos: response.apellidos,
              fechaNacimiento: new Date(response.fecha_nacimiento).toISOString().split('T')[0],
              tipoDocumento: response.tipo_documento,
              numIdentificacionPaciente: response.num_identificacion,
              eapb: response.eapb,
              regimen: response.regimen
            });
            this.id_paciente_get = response.id_paciente;
          }
        )
      }
    });
    this.userInfo = this.loginService.getUserInfo();
    
    this.radiologoForm.patchValue({
      nombreCompleto: this.userInfo.userName,
      cargo: this.userInfo.userRol,
      correoElectronico: this.userInfo.userEmail,
      telefonoContacto: this.userInfo.userPhone,
      institucionPrestadora: this.userInfo.userInstitucion,
      fechaTomaExamen: new Date().toISOString().split('T')[0],
      id_especialista: this.userInfo.userIdent
    });
  }

  onSubmit(): void {
    if (this.radiologoForm.valid) {
      this.loading = true;
      const patientData: Patient = {
        id_paciente: this.id_paciente_get || 0,
        nombres: this.radiologoForm.value.nombres,
        apellidos: this.radiologoForm.value.apellidos,
        fecha_nacimiento: new Date(this.radiologoForm.value.fechaNacimiento),
        edad: this.calculateAge(new Date(this.radiologoForm.value.fechaNacimiento)),
        tipo_documento: this.radiologoForm.value.tipoDocumento,
        num_identificacion: this.radiologoForm.value.numIdentificacionPaciente,
        eapb: this.radiologoForm.value.eapb,
        regimen: this.radiologoForm.value.regimen
      };

      const patientObservable = this.id_paciente_get
        ? this.tamizacionMamaService.updatePatient(patientData)
        : this.tamizacionMamaService.addPatient(patientData);
      patientObservable.subscribe(
        response => {
          console.log(this.id_paciente_get ? 'Paciente actualizado exitosamente' : 'Paciente agregado exitosamente', response);
          this.id_paciente_get = response.id_paciente || this.id_paciente_get;
          this.tamizacionMamaService.addFormRadiologo(this.radiologoForm.value).subscribe(
            response => {
              console.log('Formulario agregado exitosamente', response);
              this.loading = false;
              this.router.navigate(['/tamizacion-mama/list-pacientes']);
            },
            error => {
              console.error('Error al agregar el formulario', error);
              this.loading = false;
            }
          );
        },
        error => {
          console.error(this.id_paciente_get ? 'Error al actualizar el paciente' : 'Error al agregar el paciente', error);
          this.loading = false;
        }
      );
    } else {
      console.log('Formulario no válido');
    }
  }

  private calculateAge(birthDate: Date): number {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
}