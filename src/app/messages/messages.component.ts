import {ChangeDetectionStrategy, Component} from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessagesComponent {
  messages$ = this.messageService.messages$;

  constructor(public messageService: MessageService) {}
}
