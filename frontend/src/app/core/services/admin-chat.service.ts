import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ChatRoom } from '../models/chat-room';

@Injectable({
  providedIn: 'root',
})
export class AdminChatService {

  private defaultRequestOptions: Object = { withCredentials: true };

  constructor(private http: HttpClient) { }

  public getAllRooms(): Observable<Object> {
    return this.http.get(`${environment.chat_api}/room/all/`, this.defaultRequestOptions);
  }

  public deleteRoom(id: any) {
    return this.http.delete(`${environment.chat_api}/room/delete/${id}`, this.defaultRequestOptions);
  }

  public createRoom(room: ChatRoom) {
    return this.http.post(`${environment.chat_api}/room/create`, room, this.defaultRequestOptions);
  }

  public assingUserToRoom(userId: any, roomId: any) {
    return this.http.put(`${environment.chat_api}/room/add-user/${userId}-${roomId}`, null, this.defaultRequestOptions);
  }

  public getAllUsers() {
    // TODO
  }
}