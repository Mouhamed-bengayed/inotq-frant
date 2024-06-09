import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';

import Swal from 'sweetalert2';
import { AccountService } from './account.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private accountService: AccountService
    ) {}
  

   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const user = this.accountService.userValue as any;

        //const userAuthorities = user.authorities.map((authority) => authority.authority);
        const userAuthority=user.authorities[0].authority ;
        //if (user) {
            const requiredRole = route.data['requiredRole'];
           // if (!requiredRole || userAuthorities.includes(requiredRole)) {
            if (  userAuthority===requiredRole){
            // authorised so return true
            return true;
    //    }
    }

        // not logged in so redirect to login page with the return url
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "ACCES Denied !",
        });
        this.router.navigate(['/singin']);
        return false;
    }
   
   
}
