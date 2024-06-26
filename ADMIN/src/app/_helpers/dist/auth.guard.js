"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthGuard = void 0;
var core_1 = require("@angular/core");
var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, accountService) {
        this.router = router;
        this.accountService = accountService;
    }
    /* canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
         const user = this.accountService.userValue;
         if (user) {
             const requiredRole = route.data.requiredRole;
             if (!requiredRole || user.Role === requiredRole) {
 
             // authorised so return true
             return true;
         }}
 
         // not logged in so redirect to login page with the return url
         this.router.navigate(['/account/login'], { queryParams: { returnUrl: state.url }});
         return false;
     }*/
    AuthGuard.prototype.canActivate = function () {
        var user = this.accountService.userValue;
        if (user) {
            return true;
        }
        else {
            // not logged in so redirect to login page with the return url
            this.router.navigate(['/account/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        core_1.Injectable({ providedIn: 'root' })
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;
