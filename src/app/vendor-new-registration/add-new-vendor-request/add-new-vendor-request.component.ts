import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { VendorNewRegistrationService } from '../vendor-new-registration.service';

@Component({
  selector: 'app-add-new-vendor-request',
  templateUrl: './add-new-vendor-request.component.html',
  styleUrls: ['./add-new-vendor-request.component.scss']
})
export class AddNewVendorRequestComponent implements OnInit {

  
  data: any;
  errorMessage: any;
  vendorRequestForm: any;
  latitude:any;
  longitude:any

  vendorRequestDetailsForm = this.formBuilder.group({
    id: [{ value: null, disabled: false }],
    phoneNumber: [{ value: null, disabled: false }],
    ownerName: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(50),]],
    garageName: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(256),]],
    latitude: [Validators.required],
    longitude: [Validators.required]

  });

  

  constructor(private router: Router, private VendorNewRegistrationRequestService: VendorNewRegistrationService,
    public route: ActivatedRoute, private formBuilder: FormBuilder, private messageService: MessageService) { }

    getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          if (position) {
            console.log("Latitude: " + position.coords.latitude +
              "Longitude: " + position.coords.longitude);
            this.latitude = position.coords.latitude;
            this.longitude = position.coords.longitude;
  
            console.log(this.latitude);
            console.log(this.longitude);
          }
        })
      }
    }
   
  ngOnInit() {
    this.patchValue();

  }

  patchValue() {
    this.route.queryParams.subscribe((params) => {
      console.log(params)
      this.data = JSON.parse(atob(params['data']));
      console.log(this.data)
    })
    this.vendorRequestDetailsForm.patchValue({
      id: this.data.id,
      phoneNumber: this.data.phoneNumber,
      ownerName: this.data.ownerName,
      garageName: this.data.garageName,
      latitude:this.data.latitude,
      longitude:this.data.longitude
      
    });
  }

  get f() {
    return this.vendorRequestDetailsForm.controls;
  }

  onSubmitUpdateVendorRequest() {
    this.vendorRequestForm = this.vendorRequestDetailsForm.value;
    let id = this.vendorRequestDetailsForm.value;

    let obj = {
      id: this.vendorRequestForm.id,
      phoneNumber: this.vendorRequestForm.phoneNumber,
      ownerName: this.vendorRequestForm.ownerName,
      garageName: this.vendorRequestForm.garageName,
      latitude:this.latitude,
      longitude:this.longitude,

      
    }

    this.VendorNewRegistrationRequestService.updateVendorRequestinfo(id, obj).subscribe((data: any) => {
      if (this.vendorRequestDetailsForm.invalid) {
        for (const control of Object.keys(this.vendorRequestDetailsForm.controls)) {
          this.vendorRequestDetailsForm.controls[control].markAsTouched();
        }
        return;
      }
      else {
        this.router.navigate(['/vendor-new-registration/vendor-new-registration']);
      }
    },
      (error) => {
        this.errorMessage = error.error.message;
        console.log(this.errorMessage)
      });
  }


}
