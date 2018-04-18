import { Component, OnInit } from '@angular/core';
import {EventService} from "./services/event.service";
import {IEvent} from "./services/event.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  event: IEvent;

  constructor(private eventService: EventService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.event = this.eventService.readEvent(+id);
  }
}
