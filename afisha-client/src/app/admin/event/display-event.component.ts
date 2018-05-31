import { Component, OnInit } from '@angular/core';
import {IEvent} from "../../shared/models/event.model";
import {EventService} from "../../shared/services/event.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PATH} from "../../shared/constants/path.constant";

@Component({
  selector: 'app-display-event',
  templateUrl: './display-event.component.html',
  styleUrls: ['./display-event.component.scss']
})
export class DisplayEventComponent implements OnInit {

  event: IEvent;
  panelOpenState: boolean = true;

  constructor(private eventService: EventService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.event = this.route.snapshot.data['event'];
  }

  doActions(clickEvent): void{
    if(!clickEvent.target.id && !clickEvent.target.textContent) {
      return;
    }
    let action: string;
    if(clickEvent.target.id){
      action = clickEvent.target.id;
    } else {
      action = clickEvent.target.textContent.toLowerCase();
    }
    switch (action) {
      case 'edit':{
        this.router.navigate([this.router.url + '/' + PATH.EDIT]);
        break;
      }
      case 'close':{
        this.router.navigate([PATH.ADMIN + '/' + PATH.EVENTS]);
        break;
      }
    }
  }
}
