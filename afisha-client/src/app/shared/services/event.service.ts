import {Injectable} from '@angular/core';
import {IEvent} from "../models/event.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";


@Injectable()
export class EventService {

  constructor(private http: HttpClient) {

  }

  getEvents(){
    return this.http.get<IEvent[]>( environment.apiUrl + 'events');
  }

  getOneEvent(id: number){
    return this.http.get<IEvent>(environment.apiUrl + 'events/' + id);
  }

  createEvent(event: IEvent){
    delete event._id;
    return this.http.post<IEvent>(environment.apiUrl + 'events', event);
  }

  updateEvent(event: IEvent, id: string){
    return this.http.put<void>(environment.apiUrl + 'events/' + id, event);
  }

  deleteEvent(id: string){
    return this.http.delete<void>(environment.apiUrl + 'events/' + id);
  }

}
