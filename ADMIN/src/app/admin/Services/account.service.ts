import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Patient } from 'src/app/_models/patient';
import { Medecin } from 'src/app/_models';


@Injectable({ providedIn: 'root' })
export class AccountService {
    private medecinSubject: BehaviorSubject<Medecin | null>;
    public medecin: Observable<Medecin | null>;
    isconn: any=false;

    constructor(
        private router: Router,
        private http: HttpClient
    ) 
    {
        this.medecinSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('medecin') || sessionStorage.getItem('medecin')!));
        this.medecin = this.medecinSubject.asObservable();
    }
 
    public get medecinValue() {
        return this.medecinSubject.value;
    }

    public get userValue() {
        return this.medecinSubject.value;
    }
    login(email: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}/api/auth/signIn`, { email, password })
            .pipe(map(medecin => {
                // const token = response.accessToken; 
                //        if (rememberMe) {
                // localStorage.setItem('access_token', token);
                // store user details and jwt token in local storage to keep user logged in between page refreshes
              //  localStorage.setItem('user', JSON.stringify(user));
                console.error(medecin);
                this.medecinSubject.next(medecin);
                this.isconn=true;

                return medecin;
            }));
    }
    getIsConnected() {
        return this.medecinValue != null ;
    }
    logout() {
        // remove medecin from local storage and set current medecin to null
        localStorage.removeItem('medecin');
        sessionStorage.removeItem('medecin');
        sessionStorage.removeItem('accessToken');
        sessionStorage.removeItem('refreshToken');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        this.medecinSubject.next(null);
        this.router.navigate(['/account/login']);
    }


    register(medecin: Medecin, roleName: string) {
        return this.http.post(`${environment.apiUrl}/api/medecin/signup/medecin/${roleName}`, medecin);
    }

    registerPatient(patient: Patient): Observable<any> {
        return this.http.post<any>(`${environment.apiUrl}/api/patient/register-patient/`, patient);
    }

    getAll() {
        return this.http.get<Medecin[]>(`${environment.apiUrl}/users`);
    }

    getById(username: string) {
        return this.http.get<Medecin>(`${environment.apiUrl}/api/user/get-userByUsername/${username}`);
    }

    update(id: Number, params: any) {
        return this.http.put(`${environment.apiUrl}/users/${id}`, params)
            .pipe(map(x => {
                // update stored user if the logged in user updated their own record
                if (id == this.medecinValue?.id) {
                    // update local storage
                    const medecin = { ...this.medecinValue, ...params };
                    localStorage.setItem('medecin', JSON.stringify(medecin));

                    // publish updated medecin to subscribers
                    this.medecinSubject.next(medecin);
                }
                return x;
            }));
    }

    delete(id: Number) {
        return this.http.delete(`${environment.apiUrl}/users/${id}`)
            .pipe(map(x => {
                // auto logout if the logged in user deleted their own record
                if (id == this.medecinValue?.id) {
                    this.logout();
                }
                return x;
            }));
    }

    getAuthToken(): string {
        const token = localStorage.getItem('access_token');
        console.log('SERVICE token is' + token)

        return token || 'EMPTY';
    }
   
    forgetPassword(username: String, resetPass: any) {
        return this.http.put(`${environment.apiUrl}/api/user/forgetpass/${username}`, resetPass);
    }
    userForgetPassword(email: String) {
        return this.http.post(`${environment.apiUrl}/api/user/forgetpassword/${email}`, null);
    }
    forgetPasswordbyemail(email: String, resetPass: any) {
        return this.http.put(`${environment.apiUrl}/api/user/forgetpassbyemail/${email}`, resetPass);
    }
    
    // getAccessToken(): string {
    //     return localStorage.getItem('accessToken');
    //   }
    // getrefresgtoken():string{
    //     return localStorage.getItem('refreshToken');
    // }

      refreshToken(): Observable<any> {
        // Implement logic to call the token refresh API
        return this.http.post<any>('/api/auth/refreshToken', { refreshToken: localStorage.getItem('refreshToken') });
      }

}