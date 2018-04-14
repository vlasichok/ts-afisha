import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from "@angular/router";
import {EventService} from "./event.service";
import {PATH} from "../../shared/constants/path.constant";

@Injectable()
export class EventRouteActivatorService implements CanActivate{

  constructor(private eventService: EventService, private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot){
    const eventExist = !!this.eventService.readEvent(+route.params['id']);
    if(!eventExist){
      this.router.navigate([PATH.ERROR]);
    } else {
      return eventExist;
    }
  }

}
