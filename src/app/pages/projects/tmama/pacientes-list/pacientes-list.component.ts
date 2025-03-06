import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/core/models/patient.model';
import { TamizacionMamaService } from 'src/app/core/services/tamizacion-mama/tamizacion-mama.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login/login.service';

@Component({
  selector: 'app-pacientes-list',
  templateUrl: './pacientes-list.component.html',
  styleUrls: ['./pacientes-list.component.css'],
  standalone: false
})
export class PacientesListComponent implements OnInit {

  pacientes: Patient[] = [];
  filteredPacientes: Patient[] = [];
  expandedRow: number | null = null;
  searchTerm: string = '';
  noResults: boolean = false;
  forms: any[] = [];
  loadingForms: boolean = false;
  userInfo: any

  constructor(private tamizacionMamaService: TamizacionMamaService, private router: Router, public loginService: LoginService) { }

  ngOnInit(): void {
    this.userInfo = this.loginService.getUserInfo()
    this.tamizacionMamaService.getPatients().subscribe((data: any) => {
      console.log(data);
      this.pacientes = data;
      this.filteredPacientes = data;
    });
  }

  toggleRow(index: number, event: Event): void {
    event.stopPropagation();
    if (this.expandedRow !== index) {
      this.expandedRow = index;
      this.loadingForms = true; 
      const loaderTimeout = setTimeout(() => {
        this.loadingForms = false; 
      }, 2000);

      this.tamizacionMamaService.getFormsByPatientId(this.pacientes[index].num_identificacion).subscribe((data: any) => {
        clearTimeout(loaderTimeout); 
        console.log(data);
        this.forms = [];
        this.extractForms(data.cirujanoForms, 'Cirugía Mama');
        this.extractForms(data.patologoForms, 'Patología');
        this.extractForms(data.radiologoForms, 'Radiología');
        this.loadingForms = false; 
      }, error => {
        clearTimeout(loaderTimeout); 
        console.error('Error fetching forms:', error);
        this.loadingForms = false; 
      });
    } else {
      this.expandedRow = null;
    }
  }

  extractForms(forms: any[], examen: string): void {
    forms.forEach(form => {
      const formData = form[Object.keys(form)[0]];
      this.forms.push({
        id: formData.id,
        examen,
        institucion_prestadora: formData.institucion_prestadora,
        fecha_toma_examen: this.adjustDateToLocalTime(formData.fecha_toma_examen),
        ciudad: formData.ciudad,
        departamento: formData.departamento,
      });
    });
  }

  adjustDateToLocalTime(dateString: string): Date {
    const date = new Date(dateString);
    const userTimezoneOffset = date.getTimezoneOffset() * 60000;
    return new Date(date.getTime() + userTimezoneOffset);
  }

  searchPaciente(): void {
    this.filteredPacientes = this.pacientes.filter(paciente =>
      paciente.nombres.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      paciente.apellidos.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      paciente.num_identificacion.includes(this.searchTerm)
    );
    this.noResults = this.filteredPacientes.length === 0;
  }

  goToRadiologoForm(num_identificacion_paciente: String): void {
    this.router.navigate(['/tamizacion-mama/add-radiologo-form', num_identificacion_paciente]);
  }

  goToDetailForm(type: string, idForm: string, num_identificacion_paciente: string, institucion_prestadora: string): void {
    console.log(type, idForm);
    if(type === 'Cirugía Mama') this.router.navigate(['/tamizacion-mama/cirugia-mama/form-detail', idForm]);
    if(type === 'Patología') this.router.navigate(['/tamizacion-mama/patologia/form-detail', idForm]);
    if(type === 'Radiología') this.router.navigate(['/tamizacion-mama/detail-radiologo-form', idForm, num_identificacion_paciente, institucion_prestadora]);
  }
}