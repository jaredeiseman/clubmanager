import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Member } from './member.model';

@Injectable()
export class AppService {
  members: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.members = database.list('members');
  }

  //Get Methods

  getMembers() {
    return this.members;
  }

  getMemberById(id) {
    return this.database.object('members/' + id);
  }

  addMember(member: Member) {
    this.members.push(member);
  }

}
