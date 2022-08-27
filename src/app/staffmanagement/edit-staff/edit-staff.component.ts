

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Staff } from 'src/app/shared/models/staff';
import { StaffmanagementService } from '../staffmanagement.service';

@Component({
  selector: 'app-edit-staff',
  templateUrl: './edit-staff.component.html',
  styleUrls: ['./edit-staff.component.scss']
})
export class EditStaffComponent implements OnInit {

  id: any;
  staffdata!: Staff;
  rolesList: any;
  staffForm:any;
  latitude!: number;
  longitude!: number;

  staffDetailsForm = this.formBuilder.group({
    id: [{ value: '' }],
    phoneNumber: [{ value: '', }],
    name: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(50),]],
    role: [null, [Validators.required]],
    aadharNumber: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(12),]],
    addressLine: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(256),]],
    city: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(256),]],
    state: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(256),]],
    zipcode: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(6),]],
    latitude: [null, Validators.required],
    longitude: [null, Validators.required]
  });

  constructor(private formBuilder: FormBuilder, private staffmanagementService: StaffmanagementService, public route: ActivatedRoute, public router: Router) { }

  // getLocation() {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       if (position) {
  //         console.log("Latitude: " + position.coords.latitude +
  //           "Longitude: " + position.coords.longitude);
  //         this.latitude = position.coords.latitude;
  //         this.longitude = position.coords.longitude;
  //         console.log(this.latitude,this.longitude);
  //       }
  //     })
  //   }
  // }

  ngOnInit(): void {

    this.getStaffRoles();
    this.patchValue();
    
  }

  get f() {
    return this.staffDetailsForm.controls;
  }
  patchValue() {
    this.id = this.route.snapshot.params['id']
    this.staffmanagementService.getStaffById(this.id).subscribe((data: Staff) => {
      this.staffdata = data;
    });
    this.staffDetailsForm.patchValue({
      id: this.staffdata.id,
      phoneNumber: this.staffdata.phoneNumber,
      name: this.staffdata.name,
      role: this.staffdata.role,
      aadharNumber: this.staffdata.aadharNumber,
      addressLine: this.staffdata.addressLine,
      city: this.staffdata.city,
      state: this.staffdata.state,
      zipcode: this.staffdata.zipcode,
      latitude: this.staffdata.latitude,
      longitude: this.staffdata.longitude
    });
  }

  onSubmitUpdateStaff() {
  this.staffForm=this.staffDetailsForm.value;
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
    latitude: this.staffForm.latitude,
    longitude: this.staffForm.longitude,
    // latitude: this.latitude,
    // longitude: this.longitude,
  }
  console.log(obj);

  this.staffmanagementService.updateStaffinfo(id, obj).subscribe(data => {
    this.staffdata = data;
    this.router.navigate(['/staffmanagement/staffmanagement'])
  })
}


getStaffRoles() {
  this.staffmanagementService.getStaffRoles().subscribe((data: any) => {
    this.rolesList = data;
    console.log(this.rolesList);
  });
}
}



