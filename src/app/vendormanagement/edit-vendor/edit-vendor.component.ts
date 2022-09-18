import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from 'src/app/shared/models/vendor';
import { VendormanagementService } from '../vendormanagement.service';

@Component({
  selector: 'app-edit-vendor',
  templateUrl: './edit-vendor.component.html',
  styleUrls: ['./edit-vendor.component.scss']
})
export class EditVendorComponent implements OnInit {

  submitted = false;
  id: any;
  vendordata!: Vendor;
  vendorForm: any;
  latitude!: number;
  longitude!: number;

  vendorDetailsForm = this.formBuilder.group({
    id: [{ value: '', disabled: false }],
    phoneNumber: [{ value: '', disabled: false }],
    vendorPin: [{ value: '', disabled: false }],
    ownerName: ['', Validators.required],
    garrageName: ['', Validators.required],
    aadharNumber: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(12), Validators.maxLength(12)]],
    addressLine: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    zipcode: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(6), Validators.maxLength(6)]],
    latitude: ['', Validators.required],
    longitude: ['', Validators.required]

  });;

  constructor(private formBuilder: FormBuilder, private VendormanagementService: VendormanagementService, public route: ActivatedRoute, public router: Router) { }

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
          console.log(this.latitude, this.longitude);
        }
      })
    }
  }

  ngOnInit(): void {

    this.patchValue();

  }

  get f() {
    return this.vendorDetailsForm.controls;
  }
  patchValue() {
    this.id = this.route.snapshot.params['id']
    this.VendormanagementService.getVendorById(this.id).subscribe((data: Vendor) => {
      this.vendordata = data;
    });
    this.vendorDetailsForm.patchValue({
      id: this.vendordata.id,
      phoneNumber: this.vendordata.phoneNumber,
      vendorPin: this.vendordata.vendorPin,
      ownerName: this.vendordata.ownerName,
      garrageName: this.vendordata.garrageName,
      aadharNumber: this.vendordata.aadharNumber,
      addressLine: this.vendordata.addressLine,
      city: this.vendordata.city,
      state: this.vendordata.state,
      zipcode: this.vendordata.zipcode,
      latitude: this.vendordata.latitude,
      longitude: this.vendordata.longitude,
      

    });
  }

  updateVendorinfo() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.vendorDetailsForm.invalid) {
      return;
    }
    else {

      this.vendorForm = this.vendorDetailsForm.value;
      let id = this.vendorDetailsForm.value.id;

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
       // latitude: this.vendorForm.latitude,
       // longitude: this.vendorForm.longitude,
         latitude: this.latitude,
         longitude: this.longitude,
      }
      console.log(obj);

      this.VendormanagementService.updateVendorinfo(id, obj).subscribe(data => {
        this.vendordata = data;
        this.router.navigate(['/vendormanagement/vendormanagement'])
      })
    }
  }
  cancel(){
    
  }
}





