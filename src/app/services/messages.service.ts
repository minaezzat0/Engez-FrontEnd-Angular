import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private httpOptians = {};

  constructor(private httpClient: HttpClient) {
    this.httpOptians = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        //'Authorization':'Access-token'
      })
    }

  }
  getAllMessages(): Observable<Message[]> {
    return this.httpClient.get<Message[]>(`${environment.API_BASE_URL}/messages`);
  }


  addMessage(NewMessage: Message): Observable<Message> {
    return this.httpClient.post<Message>(`${environment.API_BASE_URL}/contacts`,
      JSON.stringify(NewMessage), this.httpOptians);
  }


  deleteMessageById(MessageId: number): Observable<{}> {
    return this.httpClient.delete(`${environment.API_BASE_URL}/messages/${MessageId}`, this.httpOptians)

  }

}
