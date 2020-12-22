export interface ChatRoom {
  name: string
  createdAt?: Date
  updatedAt?: Date,
  owner: string,
  users?: string[]
}