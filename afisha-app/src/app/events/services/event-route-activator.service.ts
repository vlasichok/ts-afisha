import { Injectable } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router} from "@angular/router";
import {EventService} from "./event.service";

@Injectable()
export class EventRouteActivatorService implements CanActivate{

  constructor(private eventService: EventService, private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot){
    const eventExist = !!this.eventService.readEvent(+route.params['id']);

    if(!eventExist){
      this.router.navigate(['/404']);
    } else {
      return eventExist;
    }
  }

}
