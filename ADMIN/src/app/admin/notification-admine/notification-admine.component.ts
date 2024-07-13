import { Component, OnInit } from '@angular/core';
import {AccountService} from "../../Service/account.service";
import {userService} from "../../Service/userServ.service";

@Component({
  selector: 'app-notification-admine',
  templateUrl: './notification-admine.component.html',
  styleUrls: ['./notification-admine.component.css']
})
export class NotificationAdmineComponent implements OnInit {
  listofuser: any = [];

  constructor(private AccountService: AccountService, private userService: userService) {
  }

  ngOnInit(): void {
  }

  getlistofuser() {
    this.userService.loaduserbyrole('ROLE_MEDECIN').subscribe((data: any) => {
      this.listofuser = data;

    }, (error: any) => {
      console.error(error);

    });


  }
}
