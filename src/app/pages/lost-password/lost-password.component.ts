import { Component } from '@angular/core';
import {UserService} from "../../services/user/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-lost-password',
  templateUrl: './lost-password.component.html',
  styleUrls: ['./lost-password.component.css']
})
export class LostPasswordComponent {
  email: string = '';
  result: any = '';
  error: any = '';
  complete: string ='';


  constructor(
    private userService: UserService
  ) {
  }

  onSubmit() {
    this.userService.lostPassword(this.email).subscribe(
      {
        next: (value: any) => {
          this.result = value
          //this.router.navigate(["/login"]);
        },
        error: (error: string) => this.error =error,
        complete: () => this.complete = "fini"
    })
  }
}
