import { Component } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {SessionStorageService} from "../../services/session-storage/session-storage.service";
import {Router} from "@angular/router";

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
    private  sessionStorage: SessionStorageService,
    private router: Router
  ) {
  }

  onSubmit() {
    this.authService.post(this.email, this.password).subscribe(
      {
        next: (value: Event) => {
          this.sessionStorage.saveUser(value);
          this.router.navigate(["/my-plannings"]);
        },
        error: (error: string) => console.log(error),
        complete: () => console.log("fini")});
  }
}
