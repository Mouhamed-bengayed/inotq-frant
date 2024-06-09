import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoleName } from 'src/app/Models/Role';
import { User } from 'src/app/Models/user';
import { AccountService } from 'src/app/Service/account.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  test : Date = new Date();
  focus: boolean = false;
  focus1: boolean = false;
  focus2: boolean = false;
  agreePrivacy: boolean = false;
  signupForm: FormGroup=new FormGroup({});

  signupError: string = '';
  
  
  constructor(private authService: AccountService, private router: Router,private fb: FormBuilder) { }
  ngOnInit() {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[a-zA-Z])(?=.*\\d).+$')]],
      address: ['', Validators.required],
      number: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.signupForm.valid ) {
      const user = this.signupForm.value;

      this.authService.register(user).subscribe(
        (response) => {
          localStorage.setItem('email', user.email);

          console.log('User registered successfully!');
          Swal.fire({
            title: "Open Your mail?",
            text: "check your mail account for verification !",
            icon: "success"
          });
        },
        (error) => {
          console.error('Error during registration.', error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong! ",
          });
          this.signupError = 'Error during registration. Please try again.';
        }
      );
    } else {
      console.log('Form is invalid or Privacy Policy not agreed.');
    }
  }
    
}
