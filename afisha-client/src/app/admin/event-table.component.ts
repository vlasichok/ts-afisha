import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {IEvent} from "../shared/models/event.model";
import {EventService} from "../shared/services/event.service";
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {PATH} from "../shared/constants/path.constant";
import {Router} from "@angular/router";

@Component({
  selector: 'app-content',
  templateUrl: './event-table.component.html',
  styleUrls: ['./event-table.component.scss']
})
export class EventTableComponent implements OnInit {

  events: IEvent[];
  displayedColumns = ['id', 'title', 'eventDate', 'createdAt', 'actions'];
  dataSource: MatTableDataSource<IEvent>;
  private paginator: MatPaginator;
  private sort: MatSort;
  //here you can change the mat-icon buttons
  actionButtons = {
    edit: 'edit',
    display: 'open_in_new',
    stop: 'pause',
    start: 'replay'
  };

  constructor(private eventService: EventService, private router: Router) { }

  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.dataSource.sort = ms;
  }

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.dataSource.paginator = mp;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  ngOnInit() {
    this.eventService.getEvents()
      .subscribe(
        (events: IEvent[]) => {
          this.events = events;
          this.dataSource = new MatTableDataSource<IEvent>(this.events);
        },
        (error: HttpErrorResponse) => console.log(error)
      );
  }

  doAction(event, eventObject: IEvent): void{
    if(!event.target.id && !event.target.textContent) {
      return;
    }
    let action: string;
    if(event.target.id){
      action = event.target.id;
    } else {
      action = event.target.textContent;
    }

    switch (action) {
      case this.actionButtons.edit: {
        this.router.navigate([this.router.url + '/' + eventObject._id + '/' + PATH.EDIT]);
        break;
      }
      case this.actionButtons.display: {
        this.router.navigate([this.router.url + '/' + eventObject._id]);
        break;
      }
      case this.actionButtons.stop: {
        eventObject.active = false;
        break;
      }
      case this.actionButtons.start: {
        eventObject.active = true;
        break;
      }
    }
  }
}
