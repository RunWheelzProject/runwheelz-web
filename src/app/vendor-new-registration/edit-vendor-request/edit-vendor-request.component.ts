import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendorrequest } from 'src/app/shared/models/vendorrequest';
import { VendorNewRegistrationService } from '../vendor-new-registration.service';

@Component({
  selector: 'app-edit-vendor-request',
  templateUrl: './edit-vendor-request.component.html',
  styleUrls: ['./edit-vendor-request.component.scss']
})
export class EditVendorRequestComponent implements OnInit {
  submitted=false;
  id: any;
  vendorrequestdata!: Vendorrequest;
  vendorrequestForm: any;
  latitude!: number;
  longitude!: number;

  vendorRequestDetailsForm = this.formBuilder.group({
    id: [{ value: null, disabled: false }],
    phoneNumber: [{ value: null, disabled: false }],
    ownerName: [null, [Validators.required]],
    garrageName: [null, [Validators.required]],
    latitude: [Validators.required],
    longitude: [Validators.required]

  });;

  constructor(private formBuilder: FormBuilder, private VendorNewRegistrationService: VendorNewRegistrationService, public route: ActivatedRoute, public router: Router) { }

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
    return this.vendorRequestDetailsForm.controls;
  }
  patchValue() {
    this.id = this.route.snapshot.params['id']
    this.VendorNewRegistrationService.getVendorRequestById(this.id).subscribe((data: Vendorrequest) => {
      this.vendorrequestdata = data;
    });
    this.vendorRequestDetailsForm.patchValue({
      id: this.vendorrequestdata.id,
      phoneNumber: this.vendorrequestdata.phoneNumber,
      ownerName: this.vendorrequestdata.ownerName,
      garrageName: this.vendorrequestdata.garrageName,
      latitude: this.vendorrequestdata.latitude,
      longitude: this.vendorrequestdata.longitude
    });
  }

  onSubmitUpdateVendorRequest() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.vendorRequestDetailsForm.invalid) {
      return;
    }
    else {
      this.vendorrequestForm = this.vendorRequestDetailsForm.value;
      let id = this.vendorRequestDetailsForm.value.id;

      let obj = {
        id: this.vendorrequestForm.id,
        phoneNumber: this.vendorrequestForm.phoneNumber,
        ownerName: this.vendorrequestForm.ownerName,
        garrageName: this.vendorrequestForm.garrageName,
        latitude: this.vendorrequestForm.latitude,
        longitude: this.vendorrequestForm.longitude,
        // latitude: this.latitude,
        // longitude: this.longitude,
      }
      console.log(obj);

      this.VendorNewRegistrationService.updateVendorRequestinfo(id, obj).subscribe(data => {
        this.vendorrequestdata = data;
        this.router.navigate(['/vendor-new-registration/vendor-new-registration'])
      })
    }
  }


}





