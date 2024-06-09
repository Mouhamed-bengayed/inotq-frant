import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/Service/account.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  signInForm: FormGroup;
username: any;
password: any;

  constructor(private fb: FormBuilder, private authService: AccountService, private router: Router) {
    this.signInForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }
  onSubmit() {
    if (this.signInForm.valid) {
      const email = this.signInForm.value.username;
      const password = this.signInForm.value.password;
      



      this.authService.login(email, password).subscribe(
        (response) => {      
          console.log('User logged in successfully!');
          console.log(response);
         // const accessToken = response.accessToken;
          //const   refreshToken = response.refreshToken;

       
          const userAuthorities = response.authorities.map((authority:any) => authority.authority);
          /*
          if (userAuthorities.includes("ROLE_MEDECIN")) {
            this.router.navigate(['user_dashboard_Consultant/monprofil']);
          } else if (userAuthorities.includes("Consult")) {
            this.router.navigate(['user_dashboard_Consultant/monprofil']);
          } else if (userAuthorities.includes("ROLE_PATIENT")) {
            this.router.navigate(['user_dashboard_employe/monprofil']);
          } else if (userAuthorities.includes("ROLE_ADMIN")) {
            this.router.navigate(['user_dashboard_employe/monprofil']);
          } else if (userAuthorities.includes("ROLE_USER")) {
            this.router.navigate(['user_dashboardRH_w/monprofil']);
          }
          */
          


      },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
      );
    }
    
  }

}