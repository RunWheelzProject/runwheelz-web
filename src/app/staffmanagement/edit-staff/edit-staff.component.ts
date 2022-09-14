import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Staff } from 'src/app/shared/models/staff';
import { StaffmanagementService } from '../staffmanagement.service';

@Component({
  selector: 'app-edit-staff',
  templateUrl: './edit-staff.component.html',
  styleUrls: ['./edit-staff.component.scss']
})
export class EditStaffComponent implements OnInit {
  staffDetailsForm: FormGroup = new FormGroup({});
  id: any;
  submitted = false;
  staffdata!: Staff;
  rolesList: any;
  staffForm: any;
  lat!: number;
  long!: number;


  constructor(private formBuilder: FormBuilder, private staffmanagementService: StaffmanagementService, public route: ActivatedRoute,
    public router: Router,) { }



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
          this.lat = position.coords.latitude;
          this.long = position.coords.longitude;
          console.log(this.lat, this.long);
        }
      })
    }
  }

  ngOnInit(): void {
    this.staffDetailsForm = this.formBuilder.group({
      id: [{ value: null, disabled: false }],
      phoneNumber: [{ value: null, disabled: false }],
      name: [null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      role: [null, [Validators.required]],
      aadharNumber: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(12), Validators.maxLength(12)]],
      addressLine: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipcode: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(6), Validators.maxLength(6)]],
      latitude: ['', Validators.required],
      longitude: ['', Validators.required]
    });

    this.getStaffRoles();
    this.patchValue();

  }
  getStaffRoles() {
    this.staffmanagementService.getStaffRoles().subscribe((data: any) => {
      this.rolesList = data;
      console.log(this.rolesList);
    });
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
        latitude: this.staffForm.latitude,
        longitude: this.staffForm.longitude,

      }
      console.log(obj);

      this.staffmanagementService.updateStaffinfo(id, obj).subscribe(data => {
        this.staffdata = data;
        this.router.navigate(['/staffmanagement/staffmanagement'])
      })
    }
  }



}