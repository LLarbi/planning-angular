import {Component, OnInit} from '@angular/core';
import {PlanningsService} from "../../services/plannings/plannings.service";

@Component({
  selector: 'app-my-plannings',
  templateUrl: './my-plannings.component.html',
  styleUrls: ['./my-plannings.component.css']
})
export class MyPlanningsComponent implements OnInit {


  myPlannings: any;

  constructor(
    private planningsService: PlanningsService
  ) {}


  ngOnInit() {
    this.getMyPlanning()
  }

  getMyPlanning() {
    this.planningsService.getMyPlannings().subscribe(
      {
        next: (value: any) =>  this.myPlannings = value,
        error: (error: string) => console.log(error),
        complete: () => console.log("fini")});
  }
}
