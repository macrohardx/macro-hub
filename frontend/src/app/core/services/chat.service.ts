import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { io } from 'socket.io-client/build/index'; //obs: Client and server must have the same version
import { environment } from '../../../environments/environment';
import { ChatMessage } from '../models/chat-message';

@Injectable({
  providedIn: 'root',
})
export class ChatService {

  private socket: any;

  constructor(private http: HttpClient) { }

  public connect(): any {
    if (this.socket) { return; }
    this.socket = io(`${environment.chat_url}`, { path: '/macro-chat/socket-connection', transports: ['websocket'] });
    //this.socket = io(`${environment.chat_url}`, {  transports: ['websocket'] });    
  }

  /*
   * Observe any incoming messages from socket
   */
  public messages = new Observable(observer => {
    this.socket.on('message', (data) => {
      observer.next(data);
    });
  });

  /*
   * Send messages to socket
   */
  public send(data: ChatMessage) {
    this.socket.emit('message', data);
  };

  public getRooms(): Observable<Object> {
    let userId = '5f39c341b26934d5f35e6582';
    return this.http.get(`${environment.chat_api}/room/all/${userId}`, {
      withCredentials: true
    });
  }

  public joinRoom(roomId: string) {
    this.socket.emit('join-room', { roomId });
  }

  public login() {
    return this.http.post(`${environment.auth_url}`, {
      username: "leandro.almeida",
      email: "leandro.almeida@teste.com",
      password: "123456"
    }, { withCredentials: true })
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}