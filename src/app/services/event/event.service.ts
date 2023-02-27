import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Event} from "../../interface/event";


const URL = "http://localhost:8080/api/planning/1";
@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  getAllEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${URL}/events`);
  }

  addEvent(event: Event):Observable<any> {
    return this.http.post<any>(`${URL}/events`, event);
  }

  getEventById(id: number): Observable<Event> {
    return this.http.get<Event>(`http://localhost:8080/api/events/${id}`);
  }

  editEvent(event: Event):Observable<Event> {
    return this.http.put<Event>(`${URL}/events/${event.id}`, event);
  }
}
