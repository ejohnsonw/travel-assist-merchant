import { Injectable } from '@angular/core';
import {Socket} from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class BigEyeService {
  message
  messages

  constructor(private socket: Socket) {
    this.message = this.socket.fromEvent<string>('big_eye');
    ;
    this.messages = socket.fromEvent<string[]>('big_eye');

  }
}
