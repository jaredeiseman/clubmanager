import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from '../app.service';
import { Member } from '../member.model';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {

  constructor(public appService: AppService) { }

  ngOnInit() {
  }

  addMember(form: NgForm) {
    this.appService.addMember(new Member(form.value.name, form.value.role, form.value.email, parseInt(form.value.age)));
  }

}
