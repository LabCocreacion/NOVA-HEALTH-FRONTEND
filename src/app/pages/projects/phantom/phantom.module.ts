import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateReportComponent } from './create-report/create-report.component';
import { ListReportsComponent } from './list-reports/list-reports.component';
import { CreatePhantomComponent } from './create-phantom/create-phantom.component';
import { ListPhantomsComponent } from './list-phantoms/list-phantoms.component';

const routes: Routes = [
  { path: 'create-report', component: CreateReportComponent },
  { path: 'list-reports', component: ListReportsComponent },
  { path: 'create-phantom', component: CreatePhantomComponent },
  { path: 'list-phantoms', component: ListPhantomsComponent }
];

@NgModule({
  declarations: [
    CreateReportComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PhantomModule { }
