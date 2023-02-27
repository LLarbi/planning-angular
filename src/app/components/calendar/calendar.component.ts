import {Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {CalendarOptions, DateSelectArg, EventClickArg, EventApi} from '@fullcalendar/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import {EventService} from "../../services/event/event.service";
import {AddEventComponent} from "../add-event/add-event.component";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit{
  calendarOptions: CalendarOptions = {
    plugins: [
      interactionPlugin,
      dayGridPlugin,
      timeGridPlugin,
      listPlugin,
    ],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialView: 'dayGridMonth',
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    nowIndicator: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    //eventsSet: this.handleEvents.bind(this),
    //events:this.currentEvents
    /* you can update a remote database when these fire:
    eventAdd:
    eventChange:
    eventRemove:
    */
  };

  constructor(private eventService:EventService ,private changeDetector: ChangeDetectorRef, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.getAllEvents();
  }
  handleDateSelect(selectInfo: DateSelectArg) {
    const modalRef = this.modalService.open(AddEventComponent, { centered: true });
    modalRef.componentInstance.date = selectInfo.start;
  }
  getAllEvents():any{
    console.log("test ici");
    this.eventService.getAllEvents().subscribe({
      next: (data: any) => {
        console.log(data);
        this.calendarOptions.events = data;
    },
      error: (error: string) => console.log(error),
      complete: () => console.log("list events ok")});
  }
  handleEventClick(clickInfo: EventClickArg) {
    this.eventService.getEventById(+clickInfo.event.id).subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: (error: string) => console.log(error),
      complete: () => console.log("get event by id ok")});

      //console.log(clickInfo.event.id);
      //clickInfo.event.remove();
  }

 /* handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    }
  }*/

  /*handleEventClick(clickInfo: EventClickArg) {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
    this.changeDetector.detectChanges();
  }*/
}
