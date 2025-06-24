import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatBotService {
  userMessage = '';
  chatResponse = '';

  constructor(private http: HttpClient) { }

  sendMessage(message: string): Observable<any> {
    const body = { message };
    return this.http.post<any>('http://localhost:5003/chat', body);
  }
}
