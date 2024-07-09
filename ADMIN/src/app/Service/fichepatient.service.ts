import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({ providedIn: 'root' })
export class fichPatientService {
  constructor(
    private router: Router,
    private http: HttpClient,
  ) {}

public getfichepatientById(id: any) {
    return this.http.get(`${environment.apiUrl}/api/fichPatient/getPatientById/${id}`);
  }


}
