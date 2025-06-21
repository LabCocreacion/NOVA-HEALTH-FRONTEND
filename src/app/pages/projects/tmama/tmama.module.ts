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
import { MenuCalidadComponent } from './calidad/menu-calidad/menu-calidad.component';
import { FormCalidadPhantomComponent } from './calidad/form-calidad-phantom/form-calidad-phantom.component';
import { FormCalidadImagenComponent } from './calidad/form-calidad-imagen/form-calidad-imagen.component';
import { ListDobleLecturaComponent } from './calidad/list-doble-lectura/list-doble-lectura.component';
import { FormDobleLecturaComponent } from './calidad/form-doble-lectura/form-doble-lectura.component';
import { FormNivelReferenciaComponent } from './calidad/form-nivel-referencia/form-nivel-referencia.component';
import { FormIndiceRechazoComponent } from './calidad/form-indice-rechazo/form-indice-rechazo.component';
import { ListMesesCalidadComponent } from './calidad/list-meses-calidad/list-meses-calidad.component';

const routes: Routes = [
  { path: 'list-instituciones', component: InstitutosListComponent },
  { path: 'add-institucion', component: AddInstitucionesComponent },
  { path: 'load-files', component: LoadFilesComponent },
  { path: 'list-pacientes', component: PacientesListComponent },
  { path: 'add-radiologo-form', component: AddRadiologoFormComponent },
  { path: 'add-radiologo-form/:num_identificacion_paciente', component: AddRadiologoFormComponent },
  { path: 'detail-radiologo-form/:idForm/:num_identificacion_paciente/:institucion_prestadora', component: DetailRadiologoFormComponent },
  { path: 'dashboard-calidad', component: MenuCalidadComponent },
  { path: 'dashboard-calidad/add-form-calidad', component: FormCalidadPhantomComponent },
  { path: 'dashboard-calidad/add-form-calidad-imagen', component: FormCalidadImagenComponent },
  { path: 'dashboard-calidad/list-cuatrimestres', component: ListDobleLecturaComponent },
  { path: 'dashboard-calidad/form-doble-lectura', component: FormDobleLecturaComponent },
  { path: 'dashboard-calidad/form-nivel-referencia', component: FormNivelReferenciaComponent },
  { path: 'dashboard-calidad/form-indice-rechazo', component: FormIndiceRechazoComponent },
  { path: 'dashboard-calidad/list-meses-calidad', component: ListMesesCalidadComponent }

];

@NgModule({
  declarations: [
    InstitutosListComponent,
    AddInstitucionesComponent,
    LoadFilesComponent,
    PacientesListComponent,
    AddRadiologoFormComponent,
    DetailRadiologoFormComponent,
    MenuCalidadComponent,
    FormCalidadPhantomComponent,
    FormCalidadImagenComponent,
    ListDobleLecturaComponent,
    FormDobleLecturaComponent,
    FormNivelReferenciaComponent,
    FormIndiceRechazoComponent,
    ListMesesCalidadComponent
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
    DetailRadiologoFormComponent,
  ]
})
export class TmamaModule { }
