export interface ChatMessage {
  text: string,
  date?: Date,
  userId?: string,
  user?: string,
  messageId?: string,
  referenceId?: string
}