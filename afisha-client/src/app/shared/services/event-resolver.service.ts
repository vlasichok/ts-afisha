import { Injectable } from '@angular/core';
import {ActivatedRoute, Resolve} from "@angular/router";
import {EventService} from "./event.service";
import {IEvent} from "../models/event.model";
import {Observable} from "rxjs/Observable";

@Injectable()
export class EventResolverService implements Resolve<any>{

  constructor(private eventService: EventService, private route: ActivatedRoute) { }

  resolve(): Observable<IEvent>{
    return this.eventService.getOneEvent(this.route.snapshot.params['id']);
  }

}
