import {Routes} from "@angular/router";
import {Error404Component} from "./error/error404.component";
import {EventsListComponent} from "./events/events-list.component";
import {EventComponent} from "./events/event.component";
import {EventRouteActivatorService} from "./events/services/event-route-activator.service";

export const appRoutes: Routes = [
  { path: PATH.EVENTS, component: EventsListComponent },
  { path: PATH.EVENTS_ID, component: EventComponent, canActivate: [EventRouteActivatorService] },
  { path: PATH.ERROR, component: Error404Component },
  { path: PATH.USER, loadChildren: 'app/user/user.module#UserModule' },
  { path: PATH.ROOT, redirectTo:'/events', pathMatch: 'full'},
];
