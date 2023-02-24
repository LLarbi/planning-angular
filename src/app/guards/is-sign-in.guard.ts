import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {SessionStorageService} from "../services/session-storage/session-storage.service";

@Injectable({
  providedIn: 'root'
})
export class IsSignInGuard implements CanActivate {
  constructor(
    private  sessionStorageService: SessionStorageService
  )
  { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.sessionStorageService.isLoggedIn();
  }
}
