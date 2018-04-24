export interface IEvent {
  id: number,
  title: string,
  shortDescription: string,
  description: string,
  createdAt: string,
  updatedAt: string,
  date: string,
  imageUrl: string,
  location?: {
    address: string
  }
}
