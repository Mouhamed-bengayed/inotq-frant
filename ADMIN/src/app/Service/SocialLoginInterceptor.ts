import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor ,HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { AccountService } from './account.service';
import { TokenService } from './Token.service';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private accountService: AccountService,private tokenservice:TokenService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        throw new Error('Method not implemented.');
    }
/*
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if user is logged in and request is to the api url
        const Token = this.tokenservice.googleTokenSubject;
        const isLoggedIn = Token ;
        const isApiUrl = request.url.startsWith(environment.apiUrl);

        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    'Content-Type': 'application/json',
                    Authorization: `access ${Token}`,
                    //'RefreshToken': user.refreshToken 
                }
            });
        }

        return next.handle(request);
        
        }*/
    
}

