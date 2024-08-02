import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AdminLayoutModule } from './admin/admin-layout.module';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatStepperModule} from '@angular/material/stepper';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common';
import { SuiviPostImmediatComponent } from './admin/suivi-post-immediat/suivi-post-immediat.component';
import {ValidationComponent} from "./FrontOffice/validation/validation.component";
import {VerificationComponent} from "./FrontOffice/ForgetPass/verification.component";
import {SignUpComponent} from "./FrontOffice/sign-up/sign-up.component";
import {SignInComponent} from "./FrontOffice/sign-in/sign-in.component";
import {NavbarComponent} from "./FrontOffice/navbar/navbar.component";
import { RECAPTCHA_SETTINGS, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings } from 'ng-recaptcha';
import { NgOtpInputModule } from 'ng-otp-input';
import {environment} from "../environments/environment";
import { ReactiveAccountComponent } from './FrontOffice/reactive-account/reactive-account.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    ReactiveAccountComponent,
    AppComponent,
    NavbarComponent,
    SignInComponent,
    SignUpComponent,
    VerificationComponent,
    ValidationComponent,
    SuiviPostImmediatComponent,

  ],
  imports: [RouterModule,
    NgOtpInputModule,

    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    CommonModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatStepperModule,
    MatDatepickerModule,
    TextFieldModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSlideToggleModule,

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    AppRoutingModule,


    AdminLayoutModule,
        FontAwesomeModule,
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
  providers: [{
    provide: RECAPTCHA_SETTINGS,
    useValue: {
      siteKey: environment.recaptcha.siteKey,
      size: 'normal'
    } as RecaptchaSettings,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
