import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})

export class MemberDetailComponent implements OnInit {

  member = null;
  memberId: string;

  constructor(private route: ActivatedRoute, private location: Location, private appService: AppService, private router: Router) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.memberId = urlParameters['id'];
    });
    this.member = this.appService.getMemberById(this.memberId);
  }

  back() {
    this.router.navigate(['clubmembers']);
  }

}
