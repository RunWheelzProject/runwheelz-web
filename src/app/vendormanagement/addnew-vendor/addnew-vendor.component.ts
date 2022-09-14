import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VendormanagementService } from '../vendormanagement.service';

@Component({
  selector: 'app-addnew-vendor',
  templateUrl: './addnew-vendor.component.html',
  styleUrls: ['./addnew-vendor.component.scss']
})
export class AddnewVendorComponent implements OnInit {

  submitted = false;
  phoneNumber: any;
  data: any;
  errorMessage: any;
  vendorForm: any;
  latitude!: number;
  longitude!: number;
  zoom!: number;
  address!: string;
  


  vendorDetailsForm = this.formBuilder.group({
    id: [{ value: null, disabled: false }],
    phoneNumber: [{ value: null, disabled: false }],
    vendorPin: [{ value: null, disabled: false }],
    ownerName: ['', Validators.required],
    garrageName: ['', Validators.required],
    aadharNumber: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(12), Validators.maxLength(12)]],
    addressLine: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    zipcode: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(6), Validators.maxLength(6)]],
    latitude: ['', Validators.required],
    longitude: ['', Validators.required]

  });

  constructor(private router: Router, private vendormanagementService: VendormanagementService,
    public route: ActivatedRoute, private formBuilder: FormBuilder) { }

    keyPress(event: any) {
      const pattern = /[0-9\+\-\ ]/;
      let inputChar = String.fromCharCode(event.charCode);
      if (event.keyCode != 8 && !pattern.test(inputChar)) {
        event.preventDefault();
      }
    }
    
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
      garrageName: this.data.garrageName,
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
    this.submitted = true;

    // stop here if form is invalid
    if (this.vendorDetailsForm.invalid) {
      return;
    }
    else {
    this.vendorForm = this.vendorDetailsForm.value;
    let id = this.vendorDetailsForm.value;

    let obj = {
      id: this.vendorForm.id,
      phoneNumber: this.vendorForm.phoneNumber,
      vendorPin: this.vendorForm.vendorPin,
      ownerName: this.vendorForm.ownerName,
      garrageName: this.vendorForm.garrageName,
      aadharNumber: this.vendorForm.aadharNumber,
      addressLine: this.vendorForm.addressLine,
      city: this.vendorForm.city,
      state: this.vendorForm.state,
      zipcode: this.vendorForm.zipcode,
      latitude: this.latitude,
      longitude: this.longitude
    }

    this.vendormanagementService.updateVendorinfo(id, obj).subscribe((data: any) => {
      
        this.router.navigate(['/vendormanagement/vendormanagement']);
    
    },
      (error) => {
        this.errorMessage = error.error.message;
        console.log(this.errorMessage)
      });
    }
  }

}




