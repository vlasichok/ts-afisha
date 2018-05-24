import {PATH} from "../shared/constants/path.constant";
import {EventsListComponent} from "./events/events-list.component";
import {MainComponent} from "./main.component";
import {EventResolverService} from "../shared/services/event-resolver.service";
import {GuardEventRouteService} from "../shared/guards/guard-event-route.service";
import {EventComponent} from "./events/event.component";

export const mainRoutes = [
  { path: PATH.ROOT, component: MainComponent,
    children: [
      { path: PATH.ROOT, redirectTo: PATH.EVENTS, pathMatch: 'full'},
      { path: PATH.EVENTS, component: EventsListComponent},
      { path: PATH.EVENTS_ID, component: EventComponent, canActivate: [GuardEventRouteService], resolve: {event: EventResolverService} },
      { path: PATH.USER, loadChildren: 'app/main/user/user.module#UserModule' },
    ]}
];
