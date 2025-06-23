import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageDevelopComponent } from './page-develop/page-develop.component';
// Import the animations components
import { RadiologistAnimationComponent } from 'src/app/shared/animations/radiologist-animation/radiologist-animation.component';
import { DevelopAnimationComponent } from 'src/app/shared/animations/develop-animation/develop-animation.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'page-develop', component: PageDevelopComponent, data: { animation: 'pageDevelop' } },
];


@NgModule({
  declarations: [
    DashboardComponent,
    PageDevelopComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RadiologistAnimationComponent,
    DevelopAnimationComponent
  ],
  providers: [],
})
export class DashboardModule { }
