import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ChatroomService } from '../chatroom.service';
import { NgForm } from '@angular/forms';
import { Message } from '../message.model';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})

export class ChatroomComponent implements OnInit, AfterViewChecked {

  chatlog: any = null;
  userName: string = null;

  constructor(public service: ChatroomService) { }

  ngOnInit() {
    this.chatlog = this.service.getLog();
  }

  ngAfterViewChecked() {
  }

  setUser(form: NgForm) {
    this.userName = form.value.username;
    setTimeout(function() {
      document.getElementById('log').scrollTop = document.getElementById('log').scrollHeight;
    }, 500);
  }

  sendMessage(form: NgForm) {
    var newMsg = new Message(form.value.message, this.userName, Date.now());
    this.service.sendMessage(newMsg);
    setTimeout(function() {
      document.getElementById('log').scrollTop = document.getElementById('log').scrollHeight;
    }, 500);
  }

  checkName(msg) {
    if (msg.from === this.userName) {
      return 'me';
    } else {
      return 'other'
    }
  }
}
