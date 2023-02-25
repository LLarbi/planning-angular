import { Component } from '@angular/core';
import {Rights} from "../../enums/rights";
import {PlanningsService} from "../../services/plannings/plannings.service";
import {CreateLinkPlanning} from "../../interface/create-link-planning";

@Component({
  selector: 'app-share-planning',
  templateUrl: './share-planning.component.html',
  styleUrls: ['./share-planning.component.css']
})
export class SharePlanningComponent {
  rights: string[] = Object.keys(Rights);
  enumRights: any;
  createUserPlanning: CreateLinkPlanning= {
    userId: -1,
    right: ''
  }

  result: any;
  error!: any;

  constructor(
    private planningService: PlanningsService,
  ) {
    this.rights = this.rights.filter( item => !(item === "MAIN"))
    this.enumRights = Rights;
  }

  onSubmit() {
    this.planningService.createLinkPlanning(this.createUserPlanning).subscribe(
      {
        next: (value: any) => {
          this.result = value
        },
        error: (error: any) => this.error = error,
        complete: () => console.log("fini")});
  }

  onSelectedUser($event: string) {
    this.createUserPlanning.userId = Number($event);
  }
}
