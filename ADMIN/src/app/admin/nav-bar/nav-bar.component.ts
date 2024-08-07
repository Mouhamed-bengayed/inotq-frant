import { Component, OnInit } from '@angular/core';
import { AccountService } from "../../Service/account.service";
import { NotificationService } from "../../Service/Notification.service";
import { Notification } from "../../_models/Notification";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  user: any;
  Notifications: Notification[] = [];

  constructor(
    private accountService: AccountService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    //this.user = this.accountService.CurrentUserInfoSubject.getValue();
    this.user = localStorage.getItem('user');
    const user = JSON.parse(this.user);

    if (user.authorities && Array.isArray(user.authorities) && user.authorities.length > 0) {
      const userAuthority = user.authorities[0].authority;

      if (userAuthority === "ROLE_ADMIN") {
        this.loadAdminNotifications(this.user.id);
      }
      else{
        this.loadNotificationsByUser(this.user.id);
      }
  }}

  loadNotificationsByUser(id: any): void {
    this.notificationService.getNotificationByUser(id).subscribe((data) => {
      this.Notifications = data.reverse();
      console.log(data);
    });
  }

  logout(): void {
    this.accountService.logout();
  }

  showNotificationDetails(notification: any): void {
    const groupTitles = notification.groupeMeds.map((g: { titre: any; }) => g.titre).join(', ');

    Swal.fire({
      title: notification.title,
      html: `
        <p>Date: ${new Date(notification.date).toLocaleString()}</p>
        <p>Message: ${notification.message}</p>
        <p>Rappel: ${notification.rappel}</p>
        <p>Groupes: ${groupTitles}</p>
      `,
      icon: 'info',
      confirmButtonText: 'OK'
    });
  }

   loadAdminNotifications(id: any): void {
    this.notificationService.getAdminNotifs(id).subscribe((data) => {
      this.Notifications = data.reverse();
      console.log(data);
    });
  }
}
