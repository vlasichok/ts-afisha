import {PATH} from "../shared/constants/path.constant";
import {EventTableComponent} from "./event-table.component";
import {SidenavComponent} from "./sidenav.component";
import {CreateEventComponent} from "./event/create-event.component";
import {DisplayEventComponent} from "./event/display-event.component";
import {EditEventComponent} from "./event/edit-event.component";
import {GuardEventRouteService} from "../shared/guards/guard-event-route.service";
import {EventResolverService} from "../shared/services/event-resolver.service";

export const adminRoutes = [
  { path: PATH.ROOT, component: SidenavComponent,
    children: [
      { path: PATH.EVENTS, component: EventTableComponent },
      { path: PATH.EVENTS + '/' + PATH.CREATE, component: CreateEventComponent},
      { path: PATH.EVENTS_ID, component: DisplayEventComponent, canActivate: [GuardEventRouteService], resolve: {event: EventResolverService} },
      { path: PATH.EVENTS_ID + '/' + PATH.EDIT, component: EditEventComponent, canActivate: [GuardEventRouteService], resolve: {event: EventResolverService} },
      { path: PATH.PROFILE, component: EditEventComponent},
      { path: PATH.HELP, component: EditEventComponent},
    ]},
  { path: '*', redirectTo: PATH.ROOT }
];
