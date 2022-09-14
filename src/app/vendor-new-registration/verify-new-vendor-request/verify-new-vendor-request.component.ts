import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Vendorrequest } from 'src/app/shared/models/vendorrequest';
import { RegistrationService } from 'src/app/shared/services/registration.service';

@Component({
  selector: 'app-verify-new-vendor-request',
  templateUrl: './verify-new-vendor-request.component.html',
  styleUrls: ['./verify-new-vendor-request.component.scss']
})
export class VerifyNewVendorRequestComponent implements OnInit {


  otp!: string;
  phoneNumber: string = "";
  verificationRef: string = "";
  VendorRegisterRequestDTO!: Vendorrequest;
  subscription: Subscription = new Subscription;
  errorMessage: string = "";
  message: string = "";

  constructor(private registrationService: RegistrationService, private router: Router) { }

  config = {
    allowNumbersOnly: true,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      width: '50px',
      height: '50px',
    },
  };

  ngOnInit(): void {
  }

  onOtpChange(otp: string) {
    this.otp = otp;
  }
  handleClick() {
    console.log(this.otp);
    var data = JSON.parse(localStorage.getItem('vendorrequest_send_otp_response') || '{}');
    this.phoneNumber = data.phoneNumber;
    this.verificationRef = data.verificationRef;

    console.log(data.phoneNumber);

    let obj = {
      phoneNumber: this.phoneNumber,
      otp: this.otp,
      verificationRef: this.verificationRef
    }

    this.subscription = this.registrationService.verifyVendorRequestOTP(obj).subscribe((data: any) => {

      //sessionStorage.setItem('staff_info', JSON.stringify(data));
      // localStorage.setItem('staff_info', JSON.stringify(data));
      console.log(data);
      this.VendorRegisterRequestDTO = data;

      this.router.navigate(['/addnewvendorrequest'],
        {
          queryParams: { data: btoa(JSON.stringify(this.VendorRegisterRequestDTO)) }
        });
    },
      (error) => {

        this.errorMessage = error.error.message;
        console.log(this.errorMessage);
      });
  }
  resend() {
    let data = JSON.parse(localStorage.getItem('vendorrequest_send_otp_response') || '{}');
    console.log(data)
    console.log(data.phoneNumber)

    this.subscription = this.registrationService.sendOTP('/api/auth/register/vendor/sendOtp/', `?phoneNumber=${data.phoneNumber}`).subscribe((data: any) => {
      this.message = data;
      console.log(this.message);
      localStorage.setItem('vendorrequest_send_otp_response', JSON.stringify(data));
    }
    );
  }

}
