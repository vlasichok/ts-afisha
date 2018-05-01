import {Injectable} from '@angular/core';
import {IEvent} from "../models/event.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {PATH} from "../constants/path.constant";


@Injectable()
export class EventService {

  constructor(private http: HttpClient) {

  }

  getEvents(): Observable<IEvent[]>{
    return this.http.get<IEvent[]>(PATH.API + 'events', {
      headers: new HttpHeaders({
        'Accept': 'application/json'
      })
    });
  }

  getOneEvent(id: number): Observable<IEvent> {
    return this.http.get<IEvent>(PATH.API + 'events/' + id, {
      headers: new HttpHeaders({
        'Accept' : 'application/json'
      })
    });
  }

  createEvent(event: IEvent): Observable<IEvent>{
    return this.http.post<IEvent>(PATH.API + 'event', JSON.stringify(event), {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    });
  }

  updateEvent(event: IEvent, id: string): Observable<void>{
    return this.http.put<void>(PATH.API + 'event/' + id, JSON.stringify(event), {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    });
  }

  deleteEvent(id: string): Observable<void>{
    return this.http.delete<void>(PATH.API + 'events/' + id);
  }

}
