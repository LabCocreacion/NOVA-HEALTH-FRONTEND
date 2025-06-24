import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChatBotService } from 'src/app/core/services/chatBot/chat-bot.service';

@Component({
  selector: 'app-chat-bot',
  standalone: false,
  templateUrl: './chat-bot.component.html',
  styleUrl: './chat-bot.component.css'
})
export class ChatBotComponent {
  messages: { from: 'user' | 'bot', text: string }[] = [];
  userInput: string = '';

  constructor(private http: HttpClient, public chatBotService: ChatBotService) { }

  sendMessage() {
    if (!this.userInput.trim()) return;
    // Agrega el mensaje del usuario
    this.messages.push({ from: 'user', text: this.userInput });
    const messageToSend = this.userInput;
    this.userInput = '';

    // Llama al servicio para obtener la respuesta del bot
    this.chatBotService.sendMessage(messageToSend).subscribe((response: any) => {
      // Cambia 'reply' por 'response' para coincidir con la respuesta del backend
      this.messages.push({ from: 'bot', text: response?.response || 'Sin respuesta' });
    }, error => {
      this.messages.push({ from: 'bot', text: 'Ocurrió un error al contactar al chatbot.' });
    });
  }

}
