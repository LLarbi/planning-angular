import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CreateUser} from "../../interface/create-user";
import {User} from "../../interface/user";
import {ModifyPassword} from "../../interface/modify-password";
import {ModifyUser} from "../../interface/modify-user";

const URL = "http://localhost:8080/api/users"
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  createUser(user: CreateUser): Observable<any> {
    return this.http.post<any>(`${URL}/create_user`, user)
  }

  searchUser(search: string): Observable<User[]> {
    return this.http.get<any>(`${URL}/search/${search}`);
  }

  validateUser(jwt: string | null): Observable<any> {
    return this.http.patch<any>(`${URL}/validate`, jwt);
  }

  lostPassword(email: string ): Observable<any> {
    return this.http.post<any>(`${URL}/lostpassword`, email);
  }
  modifyPassword(modifyPassword: ModifyPassword): Observable<any> {
    return this.http.patch<any>(`${URL}/modifypassword`, modifyPassword);
  }

  myProfile(): Observable<any> {
    return this.http.get<any>(`${URL}/profile`);
  }

  modifyProfile(profile: ModifyUser): Observable<any> {
    return this.http.patch<any>(`${URL}/modifyuser`, profile);
  }
}
