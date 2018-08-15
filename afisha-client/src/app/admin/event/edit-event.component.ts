import { Component, OnInit } from '@angular/core';
import {EventService} from "../../shared/services/event.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar, MatSnackBarRef, SimpleSnackBar} from "@angular/material";
import {IEvent} from "../../shared/models/event.model";
import {PATH} from "../../shared/constants/path.constant";
import {AmazingTimePickerService} from "amazing-time-picker";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss']
})
export class EditEventComponent implements OnInit {

  updateEventForm: FormGroup;
  minDate = new Date(2018,0,1);
  maxDate = new Date(2030, 7, 1);
  event: IEvent;
  eventId: string;

  //TODO: Update location picker with city API to upload all possible locations
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private timePicker: AmazingTimePickerService,
    private eventService: EventService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute) {
    this.updateEventForm = formBuilder.group({
      title: ['', [Validators.required]],
      abstract: ['', [Validators.maxLength(1000)]],
      description: [''],
      date: ['', [Validators.required]],
      location: [''],
      timeOfEvent: ['', [Validators.required]],
      active: []
    });
  }

  ngOnInit() {
    this.event = this.route.snapshot.data['event'];
    this.eventId = this.event._id;
    //TODO: Decide whether to setValue or [ngModel] for initial set up
    this.updateEventForm.controls.timeOfEvent.setValue(this.event.timeOfEvent);
    this.updateEventForm.controls.active.setValue(this.event.active);
  }

  updateEvent(formValue: IEvent): void{
    const updatedEvent = this.event;
    if(!this.isEventChanged(formValue, updatedEvent)){
      this.openSnackBar("No changes were made", "Close edit form")
        .onAction().subscribe(() => {
        this.closeForm();
      });
      return;
    }

    updatedEvent.updatedAt = new Date;
    Object.assign(updatedEvent, formValue);
    this.eventService.updateEvent(updatedEvent, this.eventId)
      .subscribe(
        () => {
          this.openSnackBar("The event has been updated", "Open event")
            .onAction().subscribe(() => {
            this.router.navigate([PATH.ADMIN + '/' + PATH.EVENTS + '/' + this.eventId]);
          });
        },
        (error: HttpErrorResponse) => console.log(error)
      );
    this.closeForm();
  }

  validateUpdateEventForm(): boolean{
    if(this.updateEventForm.dirty){
      if(!this.updateEventForm.invalid){
        return false;
      }
    }
    return true;
  }

  validateField(fieldName: string): boolean{
    return this.updateEventForm.controls[fieldName].valid || this.updateEventForm.controls[fieldName].untouched;
  }

  closeForm(): void{
    this.router.navigate([PATH.ADMIN]);
  }

  openTimePicker(): void {
    const amazingTimePicker = this.timePicker.open();
    amazingTimePicker.afterClose().subscribe(time => {
      this.updateEventForm.controls.timeOfEvent.setValue(time);
    });
  }

  isActive(): boolean{
    return this.updateEventForm.controls.active.value;
  }

  openSnackBar(message: string, action: string): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

  isEventChanged(newEvent: object, oldEvent: object): boolean{
    for(let prop in newEvent) {
      if (!(newEvent[prop] === oldEvent[prop])) {
        return true;
      }
    }
    return false;
  }
}
