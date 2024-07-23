import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {GroupeMed} from "../_models/GroupeMed";

@Injectable({
  providedIn: 'root'
})
export class GroupeMedService  {
  private apiUrl = 'http://localhost:8082/api/groupeMed';

  constructor(private http: HttpClient) {}

  deleteGroupeMed(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete-groupeMed/${id}`);
  }

  addGroupeMed(groupeMed: any): Observable<void> {

    return this.http.post<void>(`${this.apiUrl}/add-groupeMed`, groupeMed);
  }

  getGroupeMedById(id: number): Observable<GroupeMed> {
    return this.http.get<GroupeMed>(`${this.apiUrl}/get-groupeMed-by-id/${id}`);
  }

  getAllGroupeMed(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/list-groupeMed`);
  }
  showMeds(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/show-list-meds/${id}`);
  }

  modifiergroup(id: any, formValue: any) {
    return this.http.put<any>(`${this.apiUrl}/modifmed/${id}`,formValue);

  }
}
