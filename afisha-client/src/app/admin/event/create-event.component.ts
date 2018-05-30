import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IEvent} from "../../shared/models/event.model";
import {Router} from "@angular/router";
import {PATH} from "../../shared/constants/path.constant";
import { AmazingTimePickerService } from 'amazing-time-picker';
import {EventService} from "../../shared/services/event.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

  createEventForm: FormGroup;
  minDate = new Date(2018,0,1);
  maxDate = new Date(2030, 7, 1);
  isActive: boolean = false;
  event: IEvent;

  //TODO: Update location picker with city API to upload all possible locations
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private timePicker: AmazingTimePickerService,
    private eventService: EventService) {
    this.createEventForm = formBuilder.group({
      title: ['', [Validators.required]],
      abstract: [''],
      description: [''],
      date: ['', [Validators.required]],
      location: [''],
      timeOfEvent: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  createEvent(registerValue: IEvent): void{
    let newEvent: IEvent = {
      _id: "",
      title: "",
      abstract: "",
      description: "",
      date: new Date(),
      location: "",
      createdAt: new Date(),
      updatedAt: new Date(),
      timeOfEvent: "",
      views: 0,
      attends: 0,
      images: [""],
      author: "5b0bf30b9a962e08c5ee6171",
      comments: [],
      active: this.isActive
    };
    Object.assign(newEvent, registerValue);
    console.log(newEvent);
    this.eventService.createEvent(newEvent)
      .subscribe(
        (event: IEvent) => this.event = event,
        (error: HttpErrorResponse) => console.log(error)
      );
  }

  validateCreateEventForm(): boolean{
    return this.createEventForm.valid;
  }

  validateField(fieldName: string): boolean{
    return this.createEventForm.controls[fieldName].valid || this.createEventForm.controls[fieldName].untouched;
  }

  closeForm(): void{
    this.router.navigate([PATH.ADMIN]);
  }

  openTimePicker() {
   const amazingTimePicker = this.timePicker.open();
    amazingTimePicker.afterClose().subscribe(time => {
      this.createEventForm.controls.timeOfEvent.setValue(time);
    });
  }

  activate(){
    this.isActive ? this.isActive = false : this.isActive = true;
    console.log(this.isActive);
  }
}
