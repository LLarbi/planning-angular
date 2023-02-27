import {Component, Input, OnInit} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

import {Event} from "../../interface/event";
import {EventService} from "../../services/event/event.service";

@Component({
  selector: 'app-details-event',
  templateUrl: './details-event.component.html',
  styleUrls: ['./details-event.component.css']
})
export class DetailsEventComponent implements OnInit{
  @Input() event!: Event;
  constructor(public modal: NgbActiveModal, private eventService: EventService, private router: Router) {}

  ngOnInit() {

  }

  editEvent() {
    console.log(this.event);
     this.eventService.editEvent(this.event).subscribe({
       next: (data: any) => {
         console.log(data);
       },
       error: (error: string) => console.log(error),
       complete: () => console.log("edit event ok")});
    this.modal.close();
    //this.router.navigate(['/my-plannings']);
  }

  deleteEvent() {
    if (confirm('Are you sure you want to delete this event ?')) {
      // TODO: Supprimer l'événement avec this.event.id
      this.eventService.deleteEvent(+this.event.id).subscribe({
        next: (data: any) => {
          console.log(data);
        },
        error: (error: string) => console.log(error),
        complete: () => console.log("event deleted")});
      this.modal.close();
    }
  }
}
