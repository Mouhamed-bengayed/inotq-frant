import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class MedecinService {
  private baseUserRole  ="http://localhost:8082/api/user/list-userByRolesName/";
  private baseURLactive  ="http://localhost:8082/api/user/validate-user/";
  private baseBlockedUser="http://localhost:8082/api/user/bloque-user/";
  private baseDébloquerUser="http://localhost:8082/api/user/Débloquer-user/";
  private deletedUser="http://localhost:8082/api/medecin/delete/";
  private reactiverURL="http://localhost:8082/api/user/reactive-user/";

  constructor(private httpClient: HttpClient) { }

  activateMedecin(id:Number): Observable<any> {
    return this.httpClient.put(this.baseURLactive+id, id);
  }
  DebloquerMedecin(id:Number):Observable<any>{
    return this.httpClient.put(this.baseDébloquerUser+id, id);
  }
  getUserByRoles(RolesName:String):Observable<any>{
    const url = `${this.baseUserRole}`+RolesName;
    return this.httpClient.get<any>(url);
  }

  bloquerMedecin(id:Number):Observable<any>{
    return this.httpClient.put(this.baseBlockedUser+id, id);
  }
  supprimerMedecin(id:Number):Observable<any>{
    return this.httpClient.put(this.deletedUser+id, id);
  }

  ReactivateCeMedecin(id: Number) {
    return this.httpClient.put(this.reactiverURL+id, id);

  }
}
