import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

const USER_KEY = 'auth-user';
@Injectable({
  providedIn: 'root'
})

export class SessionStorageService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);

  constructor() {
      this.refresh()
  }

  isLoggedIn(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }

  saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    this.isLoggedInSubject.next(true);
  }

  logout(): void {
    window.sessionStorage.clear();
    this.isLoggedInSubject.next(false);
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

  refresh(): void {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      this.isLoggedInSubject.next(true);
    } else {
      this.isLoggedInSubject.next(false);
    }
  }
}
