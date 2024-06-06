import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Patient } from 'src/app/_models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseURLAjouterPatient  ="http://localhost:8082/api/patient/register-patient/";
  private deletedUser="http://localhost:8082/api/patient/delete-patient/";


  constructor(private httpClient: HttpClient,private http: HttpClient) { }
  createSuivi1(patient: Patient ): Observable<object>{
      return this.httpClient.post(this.baseURLAjouterPatient,patient);
      }

      createPatient(patient: any): Observable<any> {
        return this.httpClient.post("http://localhost:8082/api/patient/register-patient/", patient);
      }
      createsuiviImedia(patient: any): Observable<any> {
        return this.httpClient.post("http://localhost:8082/api/Suivi1/register/suivi1Post-Immediatt/", patient);
      }
      createsuivitttDissect(patient: any): Observable<any> {
        return this.httpClient.post("http://localhost:8082/api/Suivi1/register/Suivi_ttt_Dissect/", patient);
      }

      createSuiviArthrodese(patient: any): Observable<any> {
        return this.httpClient.post("http://localhost:8082/api/SuiviArthrodese/register/Suivi_Arthodese/", patient);
      }
     
      createSuiviStafff(patient: any): Observable<any> {
        return this.httpClient.post("http://localhost:8082/api/staff/register/staff/", patient);
      }
      getListePatient():Observable<any>{
        return this.httpClient.get<any>("http://localhost:8082/api/patient/list-patient/");
      }

      supprimerPatient(id:Number):Observable<any>{
        return this.httpClient.delete(this.deletedUser+id);
      }
      
      
  




}
