import { MapsAPILoader } from '@agm/core';
import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Staff } from 'src/app/shared/models/staff';
import { StaffmanagementService } from '../staffmanagement.service';

@Component({
  selector: 'app-addnew-staff',
  templateUrl: './addnew-staff.component.html',
  styleUrls: ['./addnew-staff.component.scss']
})
export class AddnewStaffComponent implements OnInit {

  submitted = false;
  staffDTO!: Staff;
  data: any;
  errorMessage: any;
  staffForm: any;
  rolesList: any;
  latitude!: number;
  longitude!: number;

  staffDetailsForm = this.formBuilder.group({
    id: [{ value: '', disabled: false }],
    phoneNumber: [{ value: '', disabled: false }],
    name: ['', Validators.required],
    role: ['', Validators.required],
    aadharNumber: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(12), Validators.maxLength(12)]],
    addressLine: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    zipcode: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(6), Validators.maxLength(6)]],
    latitude: ['', Validators.required],
    longitude: ['', Validators.required]

  });

  constructor(private router: Router, private staffmanagementService: StaffmanagementService,
    public route: ActivatedRoute, private formBuilder: FormBuilder,  private mapsAPILoader: MapsAPILoader) { }

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
    this.getStaffRoles();

    // this.mapsAPILoader.load().then(() => {
    // });
  }

  getStaffRoles() {
    this.staffmanagementService.getStaffRoles().subscribe((data: any) => {
      this.rolesList = data;
      (error: any) =>
        this.errorMessage = error;
    });
  }

   // convenience getter for easy access to form fields
   get f() { return this.staffDetailsForm.controls; }

  patchValue() {
    this.route.queryParams.subscribe((params) => {
      this.data = JSON.parse(atob(params['data']));
      console.log(this.data);

      this.staffDetailsForm.patchValue({
        id: this.data.id,
        phoneNumber: this.data.phoneNumber,
        name: this.data.name,
        role: this.data.role,
        aadharNumber: this.data.aadharNumber,
        addressLine: this.data.addressLine,
        city: this.data.city,
        state: this.data.state,
        zipcode: this.data.zipcode,
        latitude: this.data.latitude,
        longitude: this.data.longitude
      });
    });
  }

  updateStaffInfo() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.staffDetailsForm.invalid) {
      return;
    }
    else {
      this.staffForm = this.staffDetailsForm.value;
      let id = this.staffDetailsForm.value.id;

      let obj = {
        id: this.staffForm.id,
        phoneNumber: this.staffForm.phoneNumber,
        name: this.staffForm.name,
        role: this.staffForm.role,
        
        aadharNumber: this.staffForm.aadharNumber,
        addressLine: this.staffForm.addressLine,
        city: this.staffForm.city,
        state: this.staffForm.state,
        zipcode: this.staffForm.zipcode,
        latitude: this.latitude,
        longitude: this.longitude,
      }
      console.log(obj);
      this.staffmanagementService.updateStaffinfo(id, obj).subscribe(
        (data: any) => {
          console.log(data)
            this.router.navigate(['/staffmanagement/staffmanagement']);
        },
        (error) => {
          this.errorMessage = error.error.message;
          console.log(this.errorMessage)
        });
      }
   
  }

}

