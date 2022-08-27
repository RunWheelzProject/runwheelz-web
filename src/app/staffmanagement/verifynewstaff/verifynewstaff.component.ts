

import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Staff } from 'src/app/shared/models/staff';
import { RegistrationService } from 'src/app/shared/services/registration.service';


@Component({
  selector: 'app-verifynewstaff',
  templateUrl: './verifynewstaff.component.html',
  styleUrls: ['./verifynewstaff.component.scss']
})
export class VerifynewstaffComponent implements OnInit {

  otp!: string;
  phoneNumber: string = "";
  verificationRef: string="";
  staffDTO!: Staff;
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
    var data = JSON.parse(localStorage.getItem('staff_send_otp_response') || '{}');
    this.phoneNumber = data.phoneNumber;
    this.verificationRef = data.verificationRef;

    console.log(data.phoneNumber);
    
    let obj = {
      phoneNumber: this.phoneNumber,
      otp: this.otp,
      verificationRef:this.verificationRef
    }

    this.subscription = this.registrationService.verifyStaffOTP(obj).subscribe((data: any) => {

      //sessionStorage.setItem('staff_info', JSON.stringify(data));
      // localStorage.setItem('staff_info', JSON.stringify(data));

      this.staffDTO = data;

      this.router.navigate(['/addnewstaff'],
        {
          queryParams: { data: btoa(JSON.stringify(this.staffDTO)) }
        });
    },
      (error) => {
        
        this.errorMessage=error.error.message;
        console.log(this.errorMessage);
      });
  }
  // resend(){
    
  // }
}
