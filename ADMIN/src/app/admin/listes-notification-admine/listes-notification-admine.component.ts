import {Component, NgIterable, OnInit} from '@angular/core';
import {NotificationService} from "../../Service/Notification.service";

@Component({
  selector: 'app-listes-notification-admine',
  templateUrl: './listes-notification-admine.component.html',
  styleUrls: ['./listes-notification-admine.component.css']
})
export class ListesNotificationAdmineComponent implements OnInit {
  notifications:any = [] ;

  constructor(private NotificationService:NotificationService) { }

  ngOnInit(): void {
    this.loadnotification();
  }

  supprimer(med: any) {

  }

  modifier(med: any) {

  }
  loadnotification(){
    this.NotificationService.getAllNotifications().subscribe((data) => {
      this.notifications = data

  });
  }
  convertDate(timestamp: number): string {
    const date = new Date(timestamp);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
  }
}
