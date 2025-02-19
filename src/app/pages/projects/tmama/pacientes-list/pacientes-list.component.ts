import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/core/models/patient.model';
import { TamizacionMamaService } from 'src/app/core/services/tamizacion-mama/tamizacion-mama.service';

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

  constructor(private tamizacionMamaService: TamizacionMamaService) { }

  ngOnInit(): void {
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
        this.forms = [];
        this.extractForms(data.cirujanoForms, 'Cirujano');
        this.extractForms(data.patologoForms, 'Patólogo');
        this.extractForms(data.radiologoForms, 'Radiólogo');
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
        examen,
        institucion_prestadora: formData.institucion_prestadora,
        fecha_toma_examen: formData.fecha_toma_examen
      });
    });
  }

  searchPaciente(): void {
    this.filteredPacientes = this.pacientes.filter(paciente =>
      paciente.nombres.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      paciente.apellidos.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      paciente.num_identificacion.includes(this.searchTerm)
    );
    this.noResults = this.filteredPacientes.length === 0;
  }

}