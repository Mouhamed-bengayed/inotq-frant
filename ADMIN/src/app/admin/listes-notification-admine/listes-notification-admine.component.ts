import {Component, NgIterable, OnInit} from '@angular/core';

@Component({
  selector: 'app-listes-notification-admine',
  templateUrl: './listes-notification-admine.component.html',
  styleUrls: ['./listes-notification-admine.component.css']
})
export class ListesNotificationAdmineComponent implements OnInit {
  notifications:any = [] ;

  constructor() { }

  ngOnInit(): void {
  }

  supprimer(med: any) {

  }

  modifier(med: any) {

  }
}
