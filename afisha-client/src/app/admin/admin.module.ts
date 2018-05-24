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

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(adminRoutes),
    FormsModule,
    MatTableModule
  ],
  providers: [
    EventService
  ],
  declarations: [
    ToolbarComponent,
    EventTableComponent,
    SidenavComponent
  ]
})
export class AdminModule { }
