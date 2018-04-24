import {Routes} from "@angular/router";
import {Error404Component} from "./error/error404.component";
import {EventsListComponent} from "./events/events-list.component";
import {EventComponent} from "./events/event.component";
import {EventRouteActivatorService} from "./events/services/event-route-activator.service";

export const appRoutes: Routes = [
  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: EventComponent, canActivate: [EventRouteActivatorService] },
  { path: '404', component: Error404Component },
  { path: '', redirectTo:'/events', pathMatch: 'full'}
];
