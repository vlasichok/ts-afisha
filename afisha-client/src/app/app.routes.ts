import {Routes} from "@angular/router";
import {Error404Component} from "./error/error404.component";
import {EventsListComponent} from "./events/events-list.component";
import {EventComponent} from "./events/event.component";
import {GuardEventRouteService} from "./shared/guards/guard-event-route.service";
import {PATH} from "./shared/constants/path.constant";
import {SearchComponent} from "./search/search.component";

export const appRoutes: Routes = [
  { path: PATH.SEARCH, component: SearchComponent},
  { path: PATH.EVENTS, component: EventsListComponent },
  { path: PATH.EVENTS_ID, component: EventComponent, canActivate: [GuardEventRouteService] },
  { path: PATH.ERROR, component: Error404Component },
  { path: PATH.USER, loadChildren: 'app/user/user.module#UserModule' },
  { path: PATH.ROOT, redirectTo: PATH.SEARCH, pathMatch: 'full'}
];
