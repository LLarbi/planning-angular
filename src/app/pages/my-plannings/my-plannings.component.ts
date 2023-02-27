import {Component, OnInit} from '@angular/core';
import {PlanningsService} from "../../services/plannings/plannings.service";
import {Rights} from "../../enums/rights";

@Component({
  selector: 'app-my-plannings',
  templateUrl: './my-plannings.component.html',
  styleUrls: ['./my-plannings.component.css']
})
export class MyPlanningsComponent implements OnInit {

  selectedPlanningId!: number;
  myPlannings: any;
  Rights: any;

  constructor(
    private planningsService: PlanningsService
  ) {
    this.Rights = Rights;
  }


  ngOnInit() {
    this.getMyPlanning()
  }

  getMyPlanning() {
    this.planningsService.getMyPlannings().subscribe(
      {
        next: (value: any[]) => {
          this.myPlannings = value;
          const planning = value.filter(item => item.right === 'MAIN');
          if (planning.length > 0) {
            this.selectedPlanningId = planning.map(item => item.planning.id)[0];
          }
        },
        error: (error: string) => console.log(error),
        complete: () => console.log("fini")});
  }
}
