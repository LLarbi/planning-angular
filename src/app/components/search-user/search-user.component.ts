import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from "../../services/user/user.service";
import {User} from "../../interface/user";

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit{

  users: User[] | undefined;
  search: string = "";
  selectedUser: number | undefined;

  @Output() select = new EventEmitter<string>();

  constructor(
    private userService: UserService,
  ) {}
  ngOnInit() {
    this.search = "";
    this.users = undefined;
    this.selectedUser = undefined;
  }

  onSubmit() {
    this.users = [];
    this.userService.searchUser(this.search).subscribe(
      {
        next: (value: User[]) => this.users = value,
        error: (error: string) => console.log(error),
        complete: () => console.log("fini")});
  }

  onSelect() {
    this.select.emit(String(this.selectedUser));
  }
}
