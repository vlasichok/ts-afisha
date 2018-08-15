import { Injectable } from '@angular/core';
import {EventService} from "./event.service";
import {Observable} from "rxjs/Observable";
import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {IEvent} from "../models/event.model";

@Injectable()
export class EventListResolverService implements Resolve<any>{

  constructor(private eventService: EventService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<IEvent[]> {
    return this.eventService.getEvents();
  }

}
