import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from '../shared/services/login.service';
@Component({
  selector: 'app-staff-login',
  templateUrl: './staff-login.component.html',
  styleUrls: ['./staff-login.component.scss']
})
export class StaffLoginComponent implements OnInit {
  subscription: Subscription = new Subscription;
  staffLoginForm: FormGroup = new FormGroup({});
  submitted = false;
  message: string = "";
  errorMessage: any;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router,) { }
  //only number will be add
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  ngOnInit() {
    this.staffLoginForm = this.formBuilder.group({
      phonenumber: ['', [Validators.required,
      Validators.pattern("^[0-9]*$"),
      Validators.minLength(10), Validators.maxLength(10)]]
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.staffLoginForm.controls; }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.staffLoginForm.invalid) {
      return;
    }
    else {
      //return this.httpclient.get(this.baseURL +'/api/staff/login/sendOtp/91'+`${phonenumber}`);
      let phonenumber = '91' + this.staffLoginForm.value.phonenumber;

      this.subscription = this.loginService.sendOTP('/api/staff/login/sendOtp/', `?phoneNumber=${phonenumber}`).subscribe((data: any) => {
        this.message = data;
        console.log(data.phoneNumber);

        localStorage.setItem('send_otp_response', JSON.stringify(data));
        this.router.navigate(['/otp']);
      },
        (error) => {
          console.log(error.error.message);
          this.errorMessage = error.error.message;
          
        });
    }
  }

}
