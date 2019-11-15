import {Injectable} from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {Order} from './order';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {
  order
  orders

  constructor(private socket: Socket) {
    this.order = this.socket.fromEvent<string>('travel_assist');
    ;
    this.orders = socket.fromEvent<string[]>('travel_assist');

  }

  // getOrder(id: string) {
  //   this.socket.emit('getDoc', id);
  // }
  //
  // newOrder() {
  //   this.socket.emit('addDoc', { id: this.docId(), doc: '' });
  // }
  //
  // editOrder(order: Order) {
  //   this.socket.emit('editDoc', order);
  // }
  //
  // private docId() {
  //   let text = '';
  //   const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  //
  //   for (let i = 0; i < 5; i++) {
  //     text += possible.charAt(Math.floor(Math.random() * possible.length));
  //   }
  //
  //   return text;
  // }
}
