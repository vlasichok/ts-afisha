import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "../shared/material.module";
import {RouterModule} from "@angular/router";
import {adminRoutes} from "./admin.routes";
import {FormsModule} from "@angular/forms";
import { ToolbarComponent } from './toolbar.component';
import { EventTableComponent } from './event-table.component';
import { SidenavComponent } from './sidenav.component';
import {EventService} from "../shared/services/event.service";
import {MatTableModule} from "@angular/material";
import { CreateEventComponent } from './event/create-event.component';
import { EditEventComponent } from './event/edit-event.component';
import { DisplayEventComponent } from './event/display-event.component';
import {GuardEventRouteService} from "../shared/guards/guard-event-route.service";
import {EventResolverService} from "../shared/services/event-resolver.service";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(adminRoutes),
    FormsModule,
    MatTableModule
  ],
  providers: [
    EventService,
    GuardEventRouteService,
    EventResolverService
  ],
  declarations: [
    ToolbarComponent,
    EventTableComponent,
    SidenavComponent,
    CreateEventComponent,
    EditEventComponent,
    DisplayEventComponent
  ]
})
export class AdminModule { }
