import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../services/user/user.service";


@Component({
  selector: 'app-validate-account',
  templateUrl: './validate-account.component.html',
  styleUrls: ['./validate-account.component.css']
})
export class ValidateAccountComponent implements OnInit{

  result: any;
   error: any;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.validateAcoount();
  }

  validateAcoount(): void {
    const jwt = this.route.snapshot.paramMap.get('jwt');

    this.userService.validateUser(jwt).subscribe(
      {
        next: (value: any) => {
          this.result = value
        },
        error: (error: any) => this.error = error,
        complete: () => console.log("fini")});
  }


}
