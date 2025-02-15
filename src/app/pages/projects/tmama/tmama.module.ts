import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstitutosListComponent } from './institutos-list/institutos-list.component';
import { RouterModule, Routes } from '@angular/router';
import { AddInstitucionesComponent } from './add-instituciones/add-instituciones.component';
import { GoogleMapsModule } from '@angular/google-maps';

const routes: Routes = [
  { path: 'list-instituciones', component: InstitutosListComponent },
  { path: 'add-institucion', component: AddInstitucionesComponent },
];

@NgModule({
  declarations: [
    InstitutosListComponent,
    AddInstitucionesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    GoogleMapsModule
  ]
})
export class TmamaModule { }
