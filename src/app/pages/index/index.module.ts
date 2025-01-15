import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { FormsModule } from '@angular/forms'

const routes: Routes = [
  { path: 'index', component: IndexComponent }
];

@NgModule({
  declarations: [
    IndexComponent,
    CalendarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FullCalendarModule,
    FormsModule
  ]
})
export class IndexModule { }
