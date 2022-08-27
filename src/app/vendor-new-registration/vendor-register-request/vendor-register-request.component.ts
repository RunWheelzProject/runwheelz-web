import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RegistrationService } from 'src/app/shared/services/registration.service';

@Component({
  selector: 'app-vendor-register-request',
  templateUrl: './vendor-register-request.component.html',
  styleUrls: ['./vendor-register-request.component.scss']
})
export class VendorRegisterRequestComponent implements OnInit {

  
  subscription: Subscription = new Subscription;
  vendorregisterrequest: FormGroup = new FormGroup({});
  submitted = false;
  message: string = "";
  errorMessage: string = "";

  constructor(private formBuilder: FormBuilder, private registrationService: RegistrationService, private router: Router) { }
  //only number will be add
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  ngOnInit() {
    this.vendorregisterrequest = this.formBuilder.group({
      phonenumber: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]]
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.vendorregisterrequest.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.vendorregisterrequest.invalid) {
      return;
    }
    else {
      //return this.httpclient.get(this.baseURL +'/api/staff/register/sendOtp/91'+`${phonenumber}`);
      let phonenumber = '91' + this.vendorregisterrequest.value.phonenumber;

      this.subscription = this.registrationService.sendOTP('/api/auth/register/vendor/sendOtp/', `?phoneNumber=${phonenumber}`).subscribe((data: any) => {
        this.message = data;
        console.log(data.phoneNumber);

        localStorage.setItem('vendorrequest_send_otp_response', JSON.stringify(data));
        this.router.navigate(['/verifynewvendorrequest']);

        (error: any) =>
          this.errorMessage = error.error.message;
        console.log(this.errorMessage);
      }
      );
    }

  }

}
