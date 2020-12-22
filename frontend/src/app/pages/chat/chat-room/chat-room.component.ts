import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../../core/services/chat.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {

  public message: string;

  public messages: any[] = [];

  constructor(private chatService: ChatService) {
    this.chatService.connect();
    this.chatService.messages.subscribe((data) => {
      this.messages.push(data);
    })
  }

  ngOnInit(): void {
  }

  public expandTextarea($event) {
    let textareaHeight = parseInt($event.target.style.height) || 0;
    if (textareaHeight < 100 || this.message.length === 0) {
      $event.target.style.height = 0;
      $event.target.style.height = `${$event.target.scrollHeight}px`;
      $event.target.parentElement.style.height = `${$event.target.scrollHeight + 10}px`
    }
  }

  public sendMessage() {
    this.chatService.send({ text: this.message });
    this.message = '';
  }

  public token: string;

  // DELETE
  public login() {
    this.chatService.login().subscribe((response) => {
      console.log(response);
    });
  }

  // DELETE
  public getRooms() {
    this.chatService.getRooms().subscribe((response) => console.log(response));
  }
}
