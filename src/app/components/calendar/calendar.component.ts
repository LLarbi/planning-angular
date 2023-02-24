import {Component, OnInit} from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit{
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    events:[
      { title: 'event',
        date: "2023-02-24",
        color: '#18e37e'
      }
    ]
  };

  constructor() {
  }
  ngOnInit(): void {

  }
}
