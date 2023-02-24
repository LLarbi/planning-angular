import { Component } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {SessionStorageService} from "../../services/session-storage/session-storage.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent {
  email!: string;
  password!: string;

  constructor(
    private authService: AuthService,
    private  sessionStorage: SessionStorageService
  ) {
  }

  onSubmit() {
    this.authService.post(this.email, this.password).subscribe(
      {
        next: (value: Event) => this.sessionStorage.saveUser(value),
        error: (error: string) => console.log(error),
        complete: () => console.log("fini")});
  }
}
