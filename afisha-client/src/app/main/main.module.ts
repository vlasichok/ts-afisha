import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EventsListComponent} from "./events/events-list.component";
import {EventComponent} from "./events/event.component";
import {EventDetailsComponent} from "./events/event-details.component";
import {RouterModule} from "@angular/router";
import { MainComponent } from './main.component';
import {mainRoutes} from "./main.routes";
import {ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "../shared/material.module";
import {NavbarComponent} from "./navbar/navbar.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(mainRoutes),
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
    EventsListComponent,
    EventDetailsComponent,
    EventComponent,
    MainComponent,
    NavbarComponent
  ]
})
export class MainModule { }
