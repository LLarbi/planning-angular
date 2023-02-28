import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Event} from "../../interface/event";


const URL = "http://localhost:8080/api/planning/";
@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  getAllEvents(planningId:number): Observable<Event[]> {
    return this.http.get<Event[]>(`${URL}${planningId}/events`);
  }

  addEvent(event: Event, planningId:number):Observable<any> {
    return this.http.post<any>(`${URL}${planningId}/events`, event);
  }

  getEventById(id: number): Observable<Event> {
    return this.http.get<Event>(`http://localhost:8080/api/events/${id}`);
  }

  editEvent(event: Event, planningId:number):Observable<Event> {
    return this.http.put<Event>(`${URL}${planningId}/events/${event.id}`, event);
  }

  deleteEvent(id: number, planningId:number): Observable<Event> {
    return this.http.delete<Event>(`${URL}${planningId}/events/${id}`);

  }
}
