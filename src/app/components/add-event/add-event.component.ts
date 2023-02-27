import {Component, Input, OnInit} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import {Event} from "../../interface/event";
import {EventService} from "../../services/event/event.service";
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  event: Event = {
    id: 0,
    title: '',
    message: '',
    start: '',
    end: ''
  };

  @Input() date: Date | null = null;
  constructor(public modal: NgbActiveModal, private eventService: EventService) {}

  ngOnInit() {
    console.log(this.date);
  }

  addEvent() {
    console.log(this.event);
    this.eventService.addEvent(this.event).subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: (error: string) => console.log(error),
      complete: () => console.log("add event ok")});
    this.modal.close();
  }
}
