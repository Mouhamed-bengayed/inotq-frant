import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../Models/user';
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

const headers = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };


@Injectable({ providedIn: 'root' })
export class userService{
  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
  }
  loaduserbyrole(role: any) {
    return this.http.get<any[]>(`${environment.apiUrl}/api/user/list-userByRolesName/${role}`);
  }







}
