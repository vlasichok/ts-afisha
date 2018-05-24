import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {IEvent} from "../shared/models/event.model";
import {EventService} from "../shared/services/event.service";
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";

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

  constructor(private eventService: EventService) { }

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


}
