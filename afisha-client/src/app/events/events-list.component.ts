import { Component, OnInit } from '@angular/core';
import {EventService} from "./services/event.service";
import {IEvent} from "./services/event.model";

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
    this.events = this.eventService.getEvents();
  }

}
