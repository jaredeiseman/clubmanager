import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-members',
  templateUrl: './list-members.component.html',
  styleUrls: ['./list-members.component.css']
})
export class ListMembersComponent implements OnInit {

  currentRoute: string = this.router.url;
  editing: boolean = false;

  constructor(public appService: AppService, public router: Router) { }

  ngOnInit() {
  }

  goToDetail(member) {
    this.router.navigate(['member', member.$key]);
  }

  toggleEdit(member) {
    console.log(member);
    if (this.editing === false) {
      this.editing = true;
    } else {
      this.editing = false;
      this.appService.updateMember(member);
    }
  }

  deleteMember(member) {
    if (confirm('Are you sure?')) {
      this.appService.deleteMember(member);
    }
  }

}
