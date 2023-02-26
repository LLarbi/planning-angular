import {Component, OnInit} from '@angular/core';
import {PlanningsService} from "../../services/plannings/plannings.service";

@Component({
  selector: 'app-planning-shared',
  templateUrl: './plannings-shared.component.html',
  styleUrls: ['./plannings-shared.component.css']
})
export class PlanningsSharedComponent implements OnInit{
    planningShared: any;

  constructor(
    private planningsService: PlanningsService
  ) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.planningsService.getPlanningsShared().subscribe(
      {
        next: (value: any) =>  this.planningShared = value,
        error: (error: string) => console.log(error),
        complete: () => console.log("fini")});
  }
}
