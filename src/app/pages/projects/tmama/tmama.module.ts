import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstitutosListComponent } from './institutos-list/institutos-list.component';
import { RouterModule, Routes } from '@angular/router';
import { AddInstitucionesComponent } from './add-instituciones/add-instituciones.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadFilesComponent } from './load-files/load-files.component';
import { PacientesListComponent } from './pacientes-list/pacientes-list.component';
import { AddRadiologoFormComponent } from './add-radiologo-form/add-radiologo-form.component';
import { DetailRadiologoFormComponent } from './detail-radiologo-form/detail-radiologo-form.component';

const routes: Routes = [
  { path: 'list-instituciones', component: InstitutosListComponent },
  { path: 'add-institucion', component: AddInstitucionesComponent },
  { path: 'load-files', component: LoadFilesComponent },
  { path: 'list-pacientes', component: PacientesListComponent },
  { path: 'add-radiologo-form', component: AddRadiologoFormComponent },
  { path: 'add-radiologo-form/:num_identificacion_paciente', component: AddRadiologoFormComponent },
  { path: 'detail-radiologo-form/:idForm/:num_identificacion_paciente/:institucion_prestadora', component: DetailRadiologoFormComponent }
];

@NgModule({
  declarations: [
    InstitutosListComponent,
    AddInstitucionesComponent,
    LoadFilesComponent,
    PacientesListComponent,
    AddRadiologoFormComponent,
    DetailRadiologoFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    GoogleMapsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AddRadiologoFormComponent,
    DetailRadiologoFormComponent
  ]
})
export class TmamaModule { }
