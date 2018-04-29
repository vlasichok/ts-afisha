import {Injectable} from '@angular/core';
import {IEvent} from "../models/event.model";

@Injectable()
export class EventService {

  constructor() {

  }

  getEvents(): IEvent[]{
    return EVENTS;
  }

  readEvent(id: number): IEvent{
    return EVENTS.find(event => event.id === id);
  }

  createEvent(event: IEvent): void{
    EVENTS.push(event);
  }

  updateEvent(event: IEvent): void{
    let index = EVENTS.findIndex(e => e.id === event.id);
    EVENTS[index] = event;
  }

  searchEvent(searchTerm: string): IEvent[] {
    //@TODO implement logic for searching events
    return [];
  }
}

//@TODO remove this variable
const EVENTS: IEvent[] = [
  {
    id: 1,
    title: 'Angu',
    shortDescription: 'How to create your first app',
    description: 'A lot of information goes here, about the app and all other stuff',
    createdAt: '9:00',
    updatedAt: '10:00',
    date: '5/5/2005',
    imageUrl: '/assets/event.png',
    location: {
      address: '123 DTP'
    }
  },
  {
    id: 2,
    title: 'Angular2',
    shortDescription: 'your first app',
    description: 'about the app and all other stuff',
    createdAt: '9:00',
    updatedAt: '10:00',
    date: '5/5/2005',
    imageUrl: '/assets/event.png',
    location: {
      address: '123 DTP'
    }
  },
  {
    id: 3,
    title: 'Angular3',
    shortDescription: 'How to create your first app',
    description: 'A lot of information',
    createdAt: '9:00',
    updatedAt: '10:00',
    date: '5/5/2005',
    imageUrl: '/assets/event.png',
    location: {
      address: '123 DTP'
    }
  },
  {
    id: 4,
    title: 'Angular4',
    shortDescription: 'How to first app',
    description: 'all other stuff',
    createdAt: '9:00',
    updatedAt: '10:00',
    date: '5/5/2005',
    imageUrl: '/assets/event.png',
    location: {
      address: '123 DTP'
    }
  },{
    id: 5,
    title: 'Angular5',
    shortDescription: 'How to ',
    description: 'A lot of information goes here, about the app and all other stuff',
    createdAt: '9:00',
    updatedAt: '10:00',
    date: '5/5/2005',
    imageUrl: '/assets/event.png',
    location: {
      address: '123 DTP'
    }
  },{
    id: 6,
    title: 'Angula6',
    shortDescription: 'How to create your first app',
    description: 'A lot of goes here',
    createdAt: '9:00',
    updatedAt: '10:00',
    date: '5/5/2005',
    imageUrl: '/assets/event.png',
    location: {
      address: '123 DTP'
    }
  }
];
