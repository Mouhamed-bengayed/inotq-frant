import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Notification} from "../../_models/Notification";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private baseUrl = 'http://localhost:8082/Notification'; // Adjust the base URL as necessary

  constructor(private http: HttpClient) {}

  createNotification(notification: Notification): Observable<Notification> {
    return this.http.post<Notification>(`${this.baseUrl}/createNotification`, notification);
  }

  getNotification(id: number): Observable<Notification> {
    return this.http.get<Notification>(`${this.baseUrl}/getNotification/${id}`);
  }

  deleteNotification(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deleteNotification/${id}`);
  }

  getAllNotifications(): Observable<Notification[]> {
    return this.http.get<Notification[]>(`${this.baseUrl}/getAllNotifications`);
  }

  getNotificationByUser(id: number): Observable<Notification[]> {
    return this.http.get<Notification[]>(`${this.baseUrl}/getNotificationByuser/${id}`);
  }
}
