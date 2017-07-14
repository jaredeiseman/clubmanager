import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Message } from './message.model';


@Injectable()
export class ChatroomService {
  chatlog: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.chatlog = database.list('chatlog');
  }

  getLog() {
    return this.chatlog;
  }

  sendMessage(message: Message) {
    this.chatlog.push(message);
  }
}
