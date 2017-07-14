import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-members',
  templateUrl: './list-members.component.html',
  styleUrls: ['./list-members.component.css']
})
export class ListMembersComponent implements OnInit {

  constructor(public appService: AppService, public router: Router) { }

  ngOnInit() {
  }

  goToDetail(member) {
    this.router.navigate(['member', member.$key]);
  }

}
