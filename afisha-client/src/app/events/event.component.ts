import { Component, OnInit } from '@angular/core';
import {EventService} from "../shared/services/event.service";
import {IEvent} from "../shared/models/event.model";
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
    this.event = this.route.snapshot.data['event'];
  }
}
