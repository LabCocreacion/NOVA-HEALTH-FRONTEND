import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateReportComponent } from './create-report/create-report.component';

const routes: Routes = [
  { path: '', component: CreateReportComponent },
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
