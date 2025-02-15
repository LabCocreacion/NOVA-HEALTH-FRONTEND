import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
// npm install  @fullcalendar/daygrid
// import { InteractionPlugin } from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.css'],
    standalone: false
})
export class CalendarComponent {
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, timeGridPlugin],
    initialView: 'dayGridMonth',
    locale: esLocale,
    headerToolbar :{
      left: 'dayGridMonth,timeGridWeek,timeGridDay',
      center: 'title',
      right: 'prev,next today'
    },
    // weekends: false,

    //https://fullcalendar.io/docs/event-object
    events: [
      { title: 'TEST', start: '2024-05-16T10:30:00', end: '2024-05-16T12:30:00' },
      { title: 'Hackaton', start: '2024-07-08T10:30:00', end: '2024-07-12T12:30:00' }
    ]
  };
}