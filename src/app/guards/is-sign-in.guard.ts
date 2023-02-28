import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {SessionStorageService} from "../services/session-storage/session-storage.service";

@Injectable({
  providedIn: 'root'
})
export class IsSignInGuard implements CanActivate {
  constructor(
    private  sessionStorageService: SessionStorageService,
    private  router: Router
  )
  { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | boolean | UrlTree {

    let login: boolean = false;
    this.sessionStorageService.isLoggedIn().subscribe( a => login = a)

    if (login) {
      return  true;
    }  else {
      return this.router.parseUrl('/login');
    }
  }
}
