import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "./shared/material.module";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {FlexLayoutModule} from "@angular/flex-layout";
import {Error404Component} from './error/error404.component';
import {appRoutes} from "./app.routes";
import {NavbarComponent} from './navbar/navbar.component';
import {EventsListComponent} from './events/events-list.component';
import {EventDetailsComponent} from './events/event-details.component';
import {EventService} from "./shared/services/event.service";
import {EventComponent} from './events/event.component';
import {GuardEventRouteService} from "./shared/guards/guard-event-route.service";
import {SearchComponent} from './search/search.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptorService} from "./shared/services/auth-interceptor.service";
import {AuthService} from "./shared/services/auth.service";
import {EventResolverService} from "./shared/services/event-resolver.service";

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    NavbarComponent,
    EventsListComponent,
    EventDetailsComponent,
    EventComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule,
    FormsModule,
    FlexLayoutModule
  ],
  providers: [
    EventService,
    GuardEventRouteService,
    AuthService,
    EventResolverService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
