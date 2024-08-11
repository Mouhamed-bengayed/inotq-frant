import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Patient } from 'src/app/_models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseURLAjouterPatient  ="http://localhost:8082/api/patient/register-patient/";
  private deletedUser="http://localhost:8082/api/patient/delete-patient/";
  private baseUrl: string = 'http://localhost:8082/api/fichPatient';
  private apiUrl = 'http://localhost:8082/api/Suivi1/register/Suivi_ttt_Dissect/';


  constructor(private httpClient: HttpClient,private http: HttpClient) { }
  createSuivi1(patient: Patient ): Observable<object>{
      return this.httpClient.post(this.baseURLAjouterPatient,patient);
      }

  createPatient(patient: any, id: number, isSpecialTreatmentSelectedBool: any): Observable<any> {
    const url = `${this.baseUrl}/register-patient/${id}?isSpecialTreatmentSelected=${isSpecialTreatmentSelectedBool}`;
    return this.httpClient.post(url, patient);
  }
      createsuiviImedia(patient: any): Observable<any> {
        return this.httpClient.post("http://localhost:8082/api/Suivi1/register/suivi1Post-Immediatt/", patient);
      }

  createsuivitttDissect(patient: any, patientId: any): Observable<any> {
    const url = `${this.apiUrl}${patientId}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.httpClient.put(url, JSON.stringify(patient), { headers });
  }

  createSuiviArthrodese(patient: any): Observable<any> {
        return this.httpClient.post("http://localhost:8082/api/SuiviArthrodese/register/Suivi_Arthodese/", patient);
      }

      createSuiviStafff(patient: any): Observable<any> {
        return this.httpClient.post("http://localhost:8082/api/staff/register/staff/", patient);
      }
      getListePatient(id:any):Observable<any>{
        return this.httpClient.get<any>(`http://localhost:8082/api/patient/list-patient/${id}`);
      }

      supprimerPatient(id:Number):Observable<any>{
        return this.httpClient.delete(this.deletedUser+id);
      }


  getPatient(id: Number | undefined):Observable<any>{
    return this.httpClient.get<any>(`http://localhost:8082/api/fichPatient/getPatientById/${id}`);
  }
}
