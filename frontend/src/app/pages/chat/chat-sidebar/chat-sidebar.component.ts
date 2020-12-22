import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../../core/services/chat.service';

@Component({
  selector: 'app-chat-sidebar',
  templateUrl: './chat-sidebar.component.html',
  styleUrls: ['./chat-sidebar.component.scss']
})
export class ChatSidebarComponent implements OnInit {

  constructor(private chatService: ChatService) { }

  public loggedUsers;
  public rooms;

  ngOnInit(): void {
    this.loggedUsers = [
      { name: 'foo' },
      { name: 'bar' },
      { name: 'baz' },
      { name: 'qux' },
      { name: 'quxx' },
    ];

    this.getRooms();
  }

  private getRooms() {
    this.chatService.getRooms().subscribe((response: any) => {
      this.rooms = response.data;
    });
  }

  public joinRoom(roomId: string) {
    this.chatService.joinRoom(roomId);
  }
}
