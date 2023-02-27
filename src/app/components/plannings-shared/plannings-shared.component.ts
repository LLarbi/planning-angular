import {Component, OnInit} from '@angular/core';
import {PlanningsService} from "../../services/plannings/plannings.service";
import {Rights} from "../../enums/rights";

@Component({
  selector: 'app-planning-shared',
  templateUrl: './plannings-shared.component.html',
  styleUrls: ['./plannings-shared.component.css']
})
export class PlanningsSharedComponent implements OnInit{
  planningShared: any;
  Rights: any;

  constructor(
    private planningsService: PlanningsService
  ) {
    this.Rights = Rights;
  }

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

  deleteLinkPlanning(id: number) {
    this.planningsService.deleteLinkPlanning(id).subscribe(
      {
        next: (value: any) => {
          this.planningShared = this.planningShared.filter( (item: any) => item.user.id != id);
        },
        error: (error: string) => console.log(error),
        complete: () => console.log("fini")});
  }
}
