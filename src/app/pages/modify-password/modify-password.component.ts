import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ModifyPassword} from "../../interface/modify-password";
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'app-modify-password',
  templateUrl: './modify-password.component.html',
  styleUrls: ['./modify-password.component.css']
})
export class ModifyPasswordComponent {
  modifyPassword: ModifyPassword = {
    token: '',
    password: ''
  };
  result: any;
  error: any;
  complete!: string;


  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {
  }

  onSubmit() {
    const jwt = this.route.snapshot.paramMap.get('jwt');

    if (jwt != null) {
      this.modifyPassword.token = jwt
    }

    this.userService.modifyPassword(this.modifyPassword).subscribe(
      {
        next: (value: any) => this.result = value,
        error: (error: string) => this.error = error,
        complete: () => this.complete = "fini"
      })
  }
}
