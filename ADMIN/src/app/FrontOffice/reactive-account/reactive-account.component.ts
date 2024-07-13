import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/Service/account.service';
import { OTPSERVICE } from 'src/app/Service/OTP.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-reactive-account',
  templateUrl: './reactive-account.component.html',
  styleUrls: ['./reactive-account.component.css']
})
export class ReactiveAccountComponent {


  token: string | undefined;
  fg: FormGroup= new FormGroup({});

  constructor(private acountservice: AccountService, private router: Router,private otpservice:OTPSERVICE) {
    this.token = undefined;}


  ngOnInit(): void {
    this.fg = new FormGroup({
      email: new FormControl('', [Validators.required]),
      recaptcha: new FormControl(null, [Validators.required])
    });


  }
  submitfg(): void {
    if (this.fg.valid) {
      const email = this.fg.value.email;
      this.acountservice.userExists(email).subscribe(
        (response) => {
          if (response) {
            Swal.fire({
              title: "Tentative de réactivation",
              text: "Une alerte a été envoyée aux administrateurs pour réactiver votre compte." +
                "La réponse séra envoyez sur ce  e-mail",
              icon: "success"
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "L'e-mail n'existe pas!",
            });
          }
        },
        (error) => {
          console.error("Error:", error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Une erreur s'est produite. Veuillez réessayer plus tard.",
          });
        }
      );
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Veuillez remplir le champ e-mail correctement.",
      });
    }
  }
}
