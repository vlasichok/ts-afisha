import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from "@angular/router";
import {EventService} from "../services/event.service";
import {PATH} from "../constants/path.constant";

@Injectable()
export class GuardEventRouteService implements CanActivate{

  constructor(private eventService: EventService, private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot){
    const eventExist = !!this.eventService.getOneEvent(+route.params['id']);
    if(!eventExist){
      this.router.navigate([PATH.ERROR]);
    } else {
      return eventExist;
    }
  }

}
