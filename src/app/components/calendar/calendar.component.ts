import {Component, OnInit, ChangeDetectorRef, Input, OnChanges, SimpleChanges} from '@angular/core';
import {CalendarOptions, DateSelectArg, EventClickArg, EventApi} from '@fullcalendar/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import {EventService} from "../../services/event/event.service";
import {AddEventComponent} from "../add-event/add-event.component";
import {DetailsEventComponent} from "../details-event/details-event.component";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit, OnChanges{
  @Input() planningId!: number;
  calendarOptions: CalendarOptions = {
    plugins: [
      interactionPlugin,
      dayGridPlugin,
      timeGridPlugin,
      listPlugin,
    ],
    locale:'fr',
    headerToolbar: {
      left: 'prev next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    buttonText:{
      today: 'Aujourd\'hui',
      month : 'Mois',
      week: 'Semaine',
      day: 'Jour',
      list: 'Mes événements',
    },
    initialView: 'dayGridMonth',
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    nowIndicator: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
  };

  constructor(private eventService:EventService ,private changeDetector: ChangeDetectorRef, private modalService: NgbModal) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.planningId = changes['planningId'].currentValue;
    this.ngOnInit();
  }
  ngOnInit(): void {
    this.getAllEvents(this.planningId);
  }
  handleDateSelect(selectInfo: DateSelectArg) {
    const modalRef = this.modalService.open(AddEventComponent, { centered: true });
    modalRef.componentInstance.planningId = this.planningId;
  }
  getAllEvents(planningId:number):any{
    this.eventService.getAllEvents(planningId).subscribe({
      next: (data: any) => {
        console.log(data);
        this.calendarOptions.events = data;
    },
      error: (error: string) => console.log(error),
      complete: () => console.log("list events ok")});
  }
  handleEventClick(clickInfo: EventClickArg) {
    this.eventService.getEventById(+clickInfo.event.id).subscribe({
      next: (event: any) => {
        console.log(event);
        const modalRef = this.modalService.open(DetailsEventComponent, { centered: true });
        modalRef.componentInstance.event = event;
        modalRef.componentInstance.planningId = this.planningId;
      },
      error: (error: string) => console.log(error),
      complete: () => console.log("get event by id ok")});
  }
}
