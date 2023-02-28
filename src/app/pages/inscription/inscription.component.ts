import {Component, OnInit} from '@angular/core';
import {CreateUser} from "../../interface/create-user";
import {UserService} from "../../services/user/user.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  user: CreateUser = {
    pseudo: '',
    email: '',
    lastname: '',
    firstname: '',
    avatar: '',
    birthdate: new Date(),
    phone: '',
    password: '',
    street: '',
    city: '',
    country: '',
    zip: ''
  };

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  onSubmit() {
    this.userService.createUser(this.user).subscribe(
      {
        next: (value: Event) => {
          console.log(value)
          this.router.navigate(["/login"]);
        },
        error: (error: string) => console.log(error),
        complete: () => console.log("fini")});
  }

  onAvatarSelect($event: string) {
    this.user.avatar = $event;
  }
}
