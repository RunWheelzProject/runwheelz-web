import { MapsAPILoader } from '@agm/core';
import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Staff } from 'src/app/shared/models/staff';
import { StaffmanagementService } from '../staffmanagement.service';

@Component({
  selector: 'app-addnew-staff',
  templateUrl: './addnew-staff.component.html',
  styleUrls: ['./addnew-staff.component.scss']
})
export class AddnewStaffComponent implements OnInit {


  staffDTO!: Staff;
  phoneNumber: any;
  data: any;
  errorMessage: any;
  staffForm: any;
  staffdata: any;
  rolesList: any;
  editable!: boolean;
  latitude!:number;
  longitude!:number;

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

  constructor(private router: Router, private staffmanagementService: StaffmanagementService,
    public route: ActivatedRoute, private formBuilder: FormBuilder, private messageService: MessageService, private mapsAPILoader: MapsAPILoader) { }
    
    get f() {
      return this.staffDetailsForm.controls;
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

    this.mapsAPILoader.load().then(() => {
    });
  }
  
  getStaffRoles() {
    this.staffmanagementService.getStaffRoles().subscribe((data: any) => {
      this.rolesList = data;
      console.log(this.rolesList);
      (error: any) =>
        this.errorMessage = error;
    });
  }

  patchValue(){
    this.route.queryParams.subscribe((params) => {
      console.log(params)
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

  
  onSubmitUpdateStaff() {

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
        if (this.staffDetailsForm.invalid) {
          for (const control of Object.keys(this.staffDetailsForm.controls)) {
            this.staffDetailsForm.controls[control].markAsTouched();
          }
          return;
        }
        else {
          this.router.navigate(['/staffmanagement/staffmanagement']);
        }
      },
      (error) => {
        this.errorMessage = error.error.message;
        console.log(this.errorMessage)
      });
  }
}

