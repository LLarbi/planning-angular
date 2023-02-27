import {Component, EventEmitter, OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {Rights} from "../../enums/rights";
import {PlanningsService} from "../../services/plannings/plannings.service";
import {CreateLinkPlanning} from "../../interface/create-link-planning";
import {EditableFieldComponent} from "../editable-field/editable-field.component";
import {SearchUserComponent} from "../search-user/search-user.component";

@Component({
  selector: 'app-share-planning',
  templateUrl: './share-planning.component.html',
  styleUrls: ['./share-planning.component.css']
})
export class SharePlanningComponent implements OnInit{
  rights: string[] = Object.keys(Rights);
  enumRights: any;
  createUserPlanning!: CreateLinkPlanning;

  result: any;
  error!: any;

  constructor(
    private planningService: PlanningsService,
  ) {
    this.rights = this.rights.filter( item => !(item === "MAIN"))
    this.enumRights = Rights;
  }

  @ViewChildren(SearchUserComponent) enfants: QueryList<SearchUserComponent> | undefined;
  @Output() refresh = new EventEmitter<undefined>();

  ngOnInit() {
    this.createUserPlanning = {
      userId: -1,
      right: ''
    }
    if (this.enfants){
      this.enfants.forEach(enfant => {
        enfant.ngOnInit();
      });
    }
  }

  onSubmit() {
    this.planningService.createLinkPlanning(this.createUserPlanning).subscribe(
      {
        next: (value: any) => {
          this.result = value
          this.onRefresh();
          this.ngOnInit();
        },
        error: (error: any) => this.error = error,
        complete: () => console.log("fini")});
  }

  onSelectedUser($event: string) {
    this.createUserPlanning.userId = Number($event);
  }

  onRefresh() {
    this.refresh.emit();
  }
}
