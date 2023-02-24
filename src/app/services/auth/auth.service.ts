import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string = "http://localhost:8080/api/auth/login";

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json'})
  };

  constructor(
    private http: HttpClient
  ) { }


  post(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.url,{username, password} , this.httpOptions);
  }


}
