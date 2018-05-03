import {Injectable} from '@angular/core';
import {IEvent} from "../models/event.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {environment} from "../../../environments/environment";


@Injectable()
export class EventService {

  constructor(private http: HttpClient) {

  }

  getEvents(): Observable<IEvent[]>{
    return this.http.get<IEvent[]>( environment.apiUrl + 'events');
  }

  getOneEvent(id: number): Observable<IEvent> {
    return this.http.get<IEvent>(environment.apiUrl + 'events/' + id);
  }

  createEvent(event: IEvent): Observable<IEvent>{
    return this.http.post<IEvent>(environment.apiUrl + 'event', event);
  }

  updateEvent(event: IEvent, id: string){
    return this.http.put<void>(environment.apiUrl + 'event/' + id, event);
  }

  deleteEvent(id: string){
    return this.http.delete<void>(environment.apiUrl + 'events/' + id);
  }

}
