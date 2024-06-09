import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OTP } from 'src/app/Models/OTP';
import { OTPSERVICE } from 'src/app/Service/OTP.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent {
  constructor(private router: Router, private otpservice: OTPSERVICE) { }
  email: string = localStorage.getItem('email') || '';
  test: Date = new Date();

  title = 'otp-app';
  newotp: OTP | undefined; 

  otp!: string;
  inputDigitLeft: string = "Verify code";
  btnStatus: string = "btn-light";

  public configOptions = {
    length: 6,
    inputClass: 'digit-otp',
    containerClass: 'd-flex justify-content-between'
  }
  
  ngOnInit() {
   
  }

  onOtpChange(event: any) {
    this.otp = event;
    if(this.otp.length < this.configOptions.length) {
      this.inputDigitLeft = this.configOptions.length - this.otp.length + " digits Left";
      this.btnStatus = 'btn-light';
    }

    if (this.otp.length === this.configOptions.length )  {
      
      this.otpservice.verifyOTP(this.otp).subscribe(result => {
        if (result==true) {
          //console.log(result);
          this.otpservice.userstatus(this.email, result).subscribe(resp => {
          this.inputDigitLeft = "Let's go!";
          this.btnStatus = 'btn-primary';
            
          } ,(error) => {
            console.error('Error while verifying OTP:', error);
            
          });
        }
         else {
          // Faire quelque chose si le résultat est faux
          this.inputDigitLeft = "Invalid OTP"; 
        this.btnStatus = 'btn-danger'; 
        }
          
      });
           
    }
  }

  isButtonClicked = false;
  onButtonClick() {
    if (this.inputDigitLeft === "Let's go!") {
      this.isButtonClicked = true;
      this.router.navigate(['/signin']); 
    }
  }
  resend() {
    this.otpservice.resendOTP(this.email).subscribe((newotp: OTP) => {
      this.newotp = newotp;
      console.log('Generated OTP:', newotp.identification);
      Swal.fire("check your mail again !");
    }, error => {
      console.error('Error while resending OTP:', error);
      Swal.fire("An error occurred while resending OTP. Please try again later .");
    }
    
    
    );
  }
}
