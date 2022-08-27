import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { VendormanagementService } from '../vendormanagement.service';

@Component({
  selector: 'app-addnew-vendor',
  templateUrl: './addnew-vendor.component.html',
  styleUrls: ['./addnew-vendor.component.scss']
})
export class AddnewVendorComponent implements OnInit {


  phoneNumber: any;
  data: any;
  errorMessage: any;
  vendorForm: any;
  latitude!: number;
  longitude!: number;
  zoom!: number;
  address!: string;
  private geoCoder:any;
  


  vendorDetailsForm = this.formBuilder.group({
    id: [{ value: null, disabled: false }],
    phoneNumber: [{ value: null, disabled: false }],
    vendorPin: [{ value: null, disabled: false }],
    ownerName: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(50),]],
    garageName: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(256),]],
    aadharNumber: [ [Validators.required, Validators.minLength(1), Validators.maxLength(12),]],
    addressLine: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(256),]],
    city: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(256),]],
    state: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(12),]],
    zipcode: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(6),]],
    latitude: [Validators.required],
    longitude: [Validators.required]

  });

  constructor(private router: Router, private vendormanagementService: VendormanagementService,
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
    this.vendorDetailsForm.patchValue({
      id: this.data.id,
      phoneNumber: this.data.phoneNumber,
      vendorPin: this.data.vendorPin,
      ownerName: this.data.ownerName,
      garageName: this.data.garageName,
      aadharNumber: this.data.aadharNumber,
      addressLine: this.data.addressLine,
      city: this.data.city,
      state: this.data.state,
      zipcode: this.data.zipcode,
      latitude: this.data.latitude,
      longitude: this.data.longitude
    });
  }

  get f() {
    return this.vendorDetailsForm.controls;
  }

  onSubmitUpdateVendor() {
    this.vendorForm = this.vendorDetailsForm.value;
    let id = this.vendorDetailsForm.value;

    let obj = {
      id: this.vendorForm.id,
      phoneNumber: this.vendorForm.phoneNumber,
      vendorPin: this.vendorForm.vendorPin,
      ownerName: this.vendorForm.ownerName,
      garageName: this.vendorForm.garageName,
      aadharNumber: this.vendorForm.aadharNumber,
      addressLine: this.vendorForm.addressLine,
      city: this.vendorForm.city,
      state: this.vendorForm.state,
      zipcode: this.vendorForm.zipcode,
      latitude: this.latitude,
      longitude: this.longitude
    }

    this.vendormanagementService.putVendorinfo(id, obj).subscribe((data: any) => {
      if (this.vendorDetailsForm.invalid) {
        for (const control of Object.keys(this.vendorDetailsForm.controls)) {
          this.vendorDetailsForm.controls[control].markAsTouched();
        }
        return;
      }
      else {
        this.router.navigate(['/vendormanagement/vendormanagement']);
      }
    },
      (error) => {
        this.errorMessage = error.error.message;
        console.log(this.errorMessage)
      });
  }

}




