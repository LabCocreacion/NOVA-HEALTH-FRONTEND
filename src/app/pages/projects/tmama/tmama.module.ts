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
import { AddPatologoFormComponent } from './add-patologo-form/add-patologo-form.component';
import { AddCirujanoFormComponent } from './add-cirujano-form/add-cirujano-form.component';
import { DetailRadiologoFormComponent } from './detail-radiologo-form/detail-radiologo-form.component';
import { MenuCalidadComponent } from './calidad/menu-calidad/menu-calidad.component';
import { FormCalidadPhantomComponent } from './calidad/form-calidad-phantom/form-calidad-phantom.component';
import { FormCalidadImagenComponent } from './calidad/form-calidad-imagen/form-calidad-imagen.component';
import { ListDobleLecturaComponent } from './calidad/list-doble-lectura/list-doble-lectura.component';
import { FormDobleLecturaComponent } from './calidad/form-doble-lectura/form-doble-lectura.component';
import { FormNivelReferenciaComponent } from './calidad/form-nivel-referencia/form-nivel-referencia.component';
import { FormIndiceRechazoComponent } from './calidad/form-indice-rechazo/form-indice-rechazo.component';
import { ListMesesCalidadComponent } from './calidad/list-meses-calidad/list-meses-calidad.component';
import { FormControlCalidadComponent } from './calidad/form-control-calidad/form-control-calidad.component';
import { FormProporcionBiradsComponent } from './calidad/form-proporcion-birads/form-proporcion-birads.component';
import { FormReporteBiopsiasComponent } from './calidad/form-reporte-biopsias/form-reporte-biopsias.component';
import { FormRellenadoComponent } from './calidad/form-rellenado/form-rellenado.component';
import { FormHojaRadarComponent } from './calidad/form-hoja-radar/form-hoja-radar.component';
// Importing animations components
import { MamographyComponent } from '../../../shared/animations/mamography/mamography.component'
import { PatientXRayComponent } from '../../../shared/animations/patient-x-ray/patient-x-ray.component';
import { DoctorComponent } from '../../../shared/animations/doctor/doctor.component';
import { ExcelAnimationComponent } from '../../../shared/animations/excel-animation/excel-animation.component';

const routes: Routes = [
  { path: 'list-instituciones', component: InstitutosListComponent },
  { path: 'add-institucion', component: AddInstitucionesComponent },
  { path: 'load-files', component: LoadFilesComponent },
  { path: 'list-pacientes', component: PacientesListComponent },
  { path: 'add-radiologo-form', component: AddRadiologoFormComponent },
  { path: 'add-radiologo-form/:num_identificacion_paciente', component: AddRadiologoFormComponent },
  { path: 'detail-radiologo-form/:idForm/:num_identificacion_paciente/:institucion_prestadora', component: DetailRadiologoFormComponent },
  { path: 'add-patologo-form', component: AddPatologoFormComponent },
  { path: 'add-cirujano-form', component: AddCirujanoFormComponent },
  { path: 'dashboard-calidad', component: MenuCalidadComponent },
  { path: 'dashboard-calidad/add-form-calidad', component: FormCalidadPhantomComponent },
  { path: 'dashboard-calidad/add-form-calidad-imagen', component: FormCalidadImagenComponent },
  { path: 'dashboard-calidad/list-cuatrimestres', component: ListDobleLecturaComponent },
  { path: 'dashboard-calidad/form-doble-lectura', component: FormDobleLecturaComponent },
  { path: 'dashboard-calidad/form-nivel-referencia', component: FormNivelReferenciaComponent },
  { path: 'dashboard-calidad/form-indice-rechazo', component: FormIndiceRechazoComponent },
  { path: 'dashboard-calidad/list-meses-calidad', component: ListMesesCalidadComponent },
  { path: 'dashboard-calidad/form-control-calidad', component: FormControlCalidadComponent },
  { path: 'dashboard-calidad/form-proporcion-birads', component: FormProporcionBiradsComponent },
  { path: 'dashboard-calidad/form-reporte-biopsias', component: FormReporteBiopsiasComponent },
  { path: 'dashboard-calidad/form-rellenado', component: FormRellenadoComponent },
  { path: 'dashboard-calidad/form-hoja-radar', component: FormHojaRadarComponent }

];

@NgModule({
  declarations: [
    InstitutosListComponent,
    AddInstitucionesComponent,
    LoadFilesComponent,
    PacientesListComponent,
    AddRadiologoFormComponent,
    AddPatologoFormComponent,
    AddCirujanoFormComponent,
    DetailRadiologoFormComponent,
    MenuCalidadComponent,
    FormCalidadPhantomComponent,
    FormCalidadImagenComponent,
    ListDobleLecturaComponent,
    FormDobleLecturaComponent,
    FormNivelReferenciaComponent,
    FormIndiceRechazoComponent,
    ListMesesCalidadComponent,
    FormControlCalidadComponent,
    FormProporcionBiradsComponent,
    FormReporteBiopsiasComponent,
    FormRellenadoComponent,
    FormHojaRadarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    GoogleMapsModule,
    FormsModule,
    ReactiveFormsModule,
    MamographyComponent,
    PatientXRayComponent,
    DoctorComponent,
    ExcelAnimationComponent
  ],
  exports: [
    AddRadiologoFormComponent,
    DetailRadiologoFormComponent,
    AddPatologoFormComponent,
    AddCirujanoFormComponent,
  ]
})
export class TmamaModule { }
