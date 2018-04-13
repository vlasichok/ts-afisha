import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "./shared/material.module";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {FlexLayoutModule} from "@angular/flex-layout";
import { Error404Component } from './error/error404.component';
import {appRoutes} from "./app.routes";
import { NavbarComponent } from './navbar/navbar.component';
import { EventsListComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/event-details.component';
import {EventService} from "./events/services/event.service";
import { EventComponent } from './events/event.component';
import {EventRouteActivatorService} from "./events/services/event-route-activator.service";

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    NavbarComponent,
    EventsListComponent,
    EventDetailsComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule,
    FormsModule,
    FlexLayoutModule
  ],
  providers: [
    EventService,
    EventRouteActivatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
