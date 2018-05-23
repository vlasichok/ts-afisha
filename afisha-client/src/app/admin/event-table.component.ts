import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {IEvent} from "../shared/models/event.model";
import {EventService} from "../shared/services/event.service";

@Component({
  selector: 'app-content',
  templateUrl: './event-table.component.html',
  styleUrls: ['./event-table.component.scss']
})
export class EventTableComponent implements OnInit {

  events: IEvent[];
  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventService.getEvents()
      .subscribe(
        (events: IEvent[]) => this.events = events,
        (error: HttpErrorResponse) => console.log(error)
      );
  }

}
