import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {EventService} from "./event.service";
import {IEvent} from "../models/event.model";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class EventResolverService implements Resolve<any>{

  constructor(private eventService: EventService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<IEvent> {
    return this.eventService.getOneEvent(route.params['id']).map((event: IEvent) => event);
  }
}
