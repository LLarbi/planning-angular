import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

import {Event} from "../../interface/event";
import {EventService} from "../../services/event/event.service";
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  @Input() planningId!: number;
  @Output() emitter = new EventEmitter<boolean>();
  event: Event = {
    id: 0,
    title: '',
    message: '',
    start: '',
    end: ''
  };

  @Input() date: Date | null = null;
  constructor(public modal: NgbActiveModal, private eventService: EventService, private router: Router) {}

  ngOnInit() {
    console.log(this.date);
  }

  addEvent(planningId:number) {
    console.log(this.event);
    this.eventService.addEvent(this.event, planningId).subscribe({
      next: (data: any) => {
        console.log(data);
        this.emitter.emit();
      },
      error: (error: string) => console.log(error),
      complete: () => console.log("add event ok")});
      this.modal.close();
      //this.router.navigate(['/my-plannings']);
  }
}
