import {Component, HostListener, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {SessionStorageService} from "../../services/session-storage/session-storage.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  login$: Observable<boolean> = this.sessionStorageService.isLoggedIn();

  constructor(
    private sessionStorageService: SessionStorageService,
    private router: Router
  )
  {}

  logout(): void {
    this.sessionStorageService.logout();
    this.router.navigate(["/login"]);
  }
}
