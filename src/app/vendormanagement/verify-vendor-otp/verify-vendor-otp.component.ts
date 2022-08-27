import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Vendor } from 'src/app/shared/models/vendor';
import { RegistrationService } from 'src/app/shared/services/registration.service';

@Component({
  selector: 'app-verify-vendor-otp',
  templateUrl: './verify-vendor-otp.component.html',
  styleUrls: ['./verify-vendor-otp.component.scss']
})
export class VerifyVendorOtpComponent implements OnInit {

  
  otp!: string;
  phoneNumber: string = "";
  verificationRef: string="";
  vendorDTO!: Vendor;
  subscription: Subscription = new Subscription;
  errorMessage:string="";


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
    var data = JSON.parse(localStorage.getItem('vendor_send_otp_response') || '{}');
    this.phoneNumber = data.phoneNumber;
    this.verificationRef = data.verificationRef;

    console.log(data.phoneNumber);
    
    let obj = {
      phoneNumber: this.phoneNumber,
      otp: this.otp,
      verificationRef:this.verificationRef
    }

    this.subscription = this.registrationService.verifyVendorOTP(obj).subscribe((data: any) => {

      //sessionStorage.setItem('staff_info', JSON.stringify(data));
      // localStorage.setItem('staff_info', JSON.stringify(data));

      this.vendorDTO = data;

      this.router.navigate(['/addnewvendor'],
        {
          queryParams: { data: btoa(JSON.stringify(this.vendorDTO)) }
        });
    },
      (error) => {
        
        this.errorMessage=error.error.message;
        console.log(this.errorMessage);
      });
  }
  
}




