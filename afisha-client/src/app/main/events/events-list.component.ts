import { Component, OnInit } from '@angular/core';
import {EventService} from "../../shared/services/event.service";
import {IEvent} from "../../shared/models/event.model";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  events: IEvent[];
  constructor(private eventService: EventService) {

  }

  ngOnInit() {
    this.eventService.getEvents()
      .subscribe(
        (events: IEvent[]) => this.events = events,
        (error: HttpErrorResponse) => console.log(error)
        );
  }

}
