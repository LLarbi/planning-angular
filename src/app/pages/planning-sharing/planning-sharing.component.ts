import {Component, ViewChild} from '@angular/core';
import {PlanningsSharedComponent} from "../../components/plannings-shared/plannings-shared.component";

@Component({
  selector: 'app-planning-sharing',
  templateUrl: './planning-sharing.component.html',
  styleUrls: ['./planning-sharing.component.css']
})
export class PlanningSharingComponent {
  @ViewChild(PlanningsSharedComponent) enfant: PlanningsSharedComponent | undefined;
  onRefresh() {
    this.enfant?.ngOnInit();
  }
}
