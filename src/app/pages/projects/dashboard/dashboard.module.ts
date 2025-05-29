import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RadiologistAnimationComponent } from 'src/app/shared/animations/radiologist-animation/radiologist-animation.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
];


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RadiologistAnimationComponent
  ],
  providers: [],
})
export class DashboardModule { }
