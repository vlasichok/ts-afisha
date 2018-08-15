export interface IEvent {
  _id: string,
  title: string,
  abstract: string,
  description: string,
  date: Date,
  location: string
  createdAt: Date,
  updatedAt: Date,
  timeOfEvent: string,
  views: number,
  attends: number,
  images: Array<any>,
  author: string,
  comments: Array<any>,
  active: boolean
}
