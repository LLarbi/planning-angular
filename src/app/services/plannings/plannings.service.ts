import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const URL = 'http://localhost:8080/api/userplanning/myplannings';
@Injectable({
  providedIn: 'root'
})
export class PlanningsService {
  constructor(
    private http: HttpClient
  ) { }

  getMyPlannings(): Observable<any> {
    return this.http.get<any>(URL)
  }
}