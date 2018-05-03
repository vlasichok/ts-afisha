export interface IEvent {
  _id: string,
  title: string,
  abstract: string,
  description: string,
  date: string,
  location: string
  createdAt: string,
  updatedAt: string,
  timeOfEvent: string,
  views: number,
  attends: number,
  images: [Object],
  author: string,
  comments: [string]
}
