import {PATH} from "../shared/constants/path.constant";
import {EventTableComponent} from "./event-table.component";
import {SidenavComponent} from "./sidenav.component";
import {CreateEventComponent} from "./event/create-event.component";
import {DisplayEventComponent} from "./event/display-event.component";
import {EditEventComponent} from "./event/edit-event.component";

export const adminRoutes = [
  { path: PATH.ROOT, component: SidenavComponent,
    children: [
      { path: PATH.EVENTS, component: EventTableComponent },
      { path: PATH.EVENTS_ID, component: DisplayEventComponent},
      { path: PATH.EVENTS_ID + '/' + PATH.EDIT, component: EditEventComponent},
      { path: PATH.EVENTS + '/' + PATH.CREATE, component: CreateEventComponent}
    ]},
  { path: '*', redirectTo: PATH.ROOT }
];
