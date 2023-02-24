import { Component } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent {
  email!: string;
  password!: string;

  constructor(
    private authService: AuthService
  ) {
  }

  onSubmit() {
    this.authService.post(this.email, this.password).subscribe(
      {
        next: (value: Event) => console.log(value),
        error: (error: string) => console.log(error),
        complete: () => console.log("fini")});
  }
}
