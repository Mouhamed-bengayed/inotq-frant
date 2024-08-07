import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ValidationComponent} from "./FrontOffice/validation/validation.component";
import {VerificationComponent} from "./FrontOffice/ForgetPass/verification.component";
import {SignInComponent} from "./FrontOffice/sign-in/sign-in.component";
import {SignUpComponent} from "./FrontOffice/sign-up/sign-up.component";
import {ReactiveAccountComponent} from "./FrontOffice/reactive-account/reactive-account.component";

const routes: Routes = [

  { path: 'signUp', component: SignUpComponent },
  { path: 'signIn', component: SignInComponent },
  { path: 'ForgetPassword', component: VerificationComponent },
  { path: 'verification', component: ValidationComponent },
  {path:'reactivation',component:ReactiveAccountComponent},

   // path: '', redirectTo: 'signIn', pathMatch: 'full' },

  // {path: '', redirectTo: 'signIn', pathMatch: 'full'},
  {path: '',
    loadChildren: () => import('./admin/admin-layout.module').then(m => m.AdminLayoutModule)
  },
  { path: '**', redirectTo: 'signIn' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
