import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CreateReportComponent } from './create-report/create-report.component';
import { ListReportsComponent } from './list-reports/list-reports.component';
import { CreatePhantomComponent } from './create-phantom/create-phantom.component';
import { ListPhantomsComponent } from './list-phantoms/list-phantoms.component';
import { ListMamografosComponent } from './list-mamografos/list-mamografos.component';
import { CreateMamografoComponent } from './create-mamografo/create-mamografo.component';


const routes: Routes = [
  { path: 'create-report', component: CreateReportComponent },
  { path: 'list-reports', component: ListReportsComponent },
  { path: 'create-phantom', component: CreatePhantomComponent },
  { path: 'list-phantoms', component: ListPhantomsComponent },
  { path: 'list-mamografos', component: ListMamografosComponent },
  { path: 'create-mamografo', component: CreateMamografoComponent },
];

@NgModule({
  declarations: [
    CreateReportComponent,
    CreateMamografoComponent,
    ListReportsComponent,
    CreatePhantomComponent,
    ListPhantomsComponent,
    ListMamografosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class PhantomModule { }
