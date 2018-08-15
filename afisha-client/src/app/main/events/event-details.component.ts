import {Component, Input, OnInit} from '@angular/core';
import {PATH} from "../../shared/constants/path.constant";
import {IEvent} from "../../shared/models/event.model";

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  @Input() event: IEvent;

  path: Object;
  constructor() { }

  ngOnInit() {
    this.path = PATH;
  }

}
