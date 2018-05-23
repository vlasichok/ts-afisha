import {PATH} from "../shared/constants/path.constant";
import {EventTableComponent} from "./event-table.component";
import {SidenavComponent} from "./sidenav.component";

export const adminRoutes = [
  { path: PATH.ROOT, component: SidenavComponent,
    children: [
      { path: PATH.EVENTS, component: EventTableComponent}
    ]},
  { path: '*', redirectTo: PATH.ROOT }
];
