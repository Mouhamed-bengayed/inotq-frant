import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {GroupeMed} from "../_models/GroupeMed";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private apiUrl = 'http://localhost:8082/Notification';

  constructor(private http: HttpClient) {
  }
  createNotification(notification: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/createNotification`, notification);
  }

  getNotification(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getNotification/${id}`);
  }

  deleteNotification(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteNotification/${id}`);
  }

  getAllNotifications(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/getAllNotifications`);
  }

  getNotificationByUser(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/getNotificationByuser/${id}`);
  }








}
