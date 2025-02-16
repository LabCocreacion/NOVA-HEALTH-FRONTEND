import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstitutosListComponent } from './institutos-list/institutos-list.component';
import { RouterModule, Routes } from '@angular/router';
import { AddInstitucionesComponent } from './add-instituciones/add-instituciones.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { FormsModule } from '@angular/forms';
import { LoadFilesComponent } from './load-files/load-files.component';

const routes: Routes = [
  { path: 'list-instituciones', component: InstitutosListComponent },
  { path: 'add-institucion', component: AddInstitucionesComponent },
  { path: 'load-files', component: LoadFilesComponent },
];

@NgModule({
  declarations: [
    InstitutosListComponent,
    AddInstitucionesComponent,
    LoadFilesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    GoogleMapsModule,
    FormsModule
  ]
})
export class TmamaModule { }
