import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { ListesPatientsComponent } from './listes-patients/listes-patients.component';
import { ProfileComponent } from './profile/profile.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { ListesMedecinComponent } from './listes-medecin/listes-medecin.component';
import { AjouterPatientComponent } from './ajouter-patient/ajouter-patient.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {DateAdapter, MAT_DATE_FORMATS, MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatStepperModule} from '@angular/material/stepper';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {TextFieldModule} from '@angular/cdk/text-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SuiviPostImmediatComponent } from './suivi-post-immediat/suivi-post-immediat.component';


import { MatNativeDateModule } from '@angular/material/core';
import { SuiviTttDissectComponent } from './suivi-ttt-dissect/suivi-ttt-dissect.component';
import { SuiviArthrodeseComponent } from './suivi-arthrodese/suivi-arthrodese.component';
import { StaffComponent } from './staff/staff.component';
import { CustomDateAdapter, CUSTOM_DATE_FORMATS } from './Services/CustomDateAdapter';
import {HttpClientModule} from "@angular/common/http";
import { ProfilePatientComponent } from './profile-patient/profile-patient.component';
import { NotificationAdmineComponent } from './notification-admine/notification-admine.component';
import { ListesNotificationAdmineComponent } from './listes-notification-admine/listes-notification-admine.component';
import { AjouterGroupeAdmineComponent } from './ajouter-groupe-admine/ajouter-groupe-admine.component';


const AdminLayoutRoutes: Routes = [

  {path:'admin', component:AdminLayoutComponent,
  children: [

     { path: 'admindashboard',  component: DashboardAdminComponent },
     { path: 'profile',component: ProfileComponent },
     { path: 'liste/patient',component: ListesPatientsComponent },
     { path: 'ajouter/patient',component: AjouterPatientComponent},
     { path: 'liste/Medecin',component: ListesMedecinComponent },
     { path: 'navbar',  component: NavBarComponent },
     { path: 'sidenavbar',  component: SideBarComponent },
     { path: 'SuiviPostImmediat',  component: SuiviPostImmediatComponent },
     { path: 'SuivitttDissect',  component: SuiviTttDissectComponent },
     { path: 'suiviArhrodese',  component: SuiviArthrodeseComponent },
     { path: 'stafff',  component: StaffComponent },
     {path: 'FichePatient/:id', component: ProfilePatientComponent},
    {path: 'notification', component: NotificationAdmineComponent},
    {path: 'listeNotification', component: ListesNotificationAdmineComponent},
    {path: 'ajouterGroupe', component: AjouterGroupeAdmineComponent}

  ]},
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
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
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule

  ],
  declarations: [
    ListesMedecinComponent,
    ProfileComponent,
    ListesPatientsComponent,
    ProfileComponent,
    NavBarComponent,
    SideBarComponent,
    DashboardAdminComponent,
    AdminLayoutComponent,
    AjouterPatientComponent,
    SuiviTttDissectComponent,
    SuiviArthrodeseComponent,
    StaffComponent,
    ProfilePatientComponent,
    NotificationAdmineComponent,
    ListesNotificationAdmineComponent,
    AjouterGroupeAdmineComponent ,
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
  providers: [
    { provide: DateAdapter, useClass: CustomDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMATS }
  ],

      exports: [RouterModule]

})

export class AdminLayoutModule {}


