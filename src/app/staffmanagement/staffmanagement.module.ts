import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffmanagementRoutingModule } from './staffmanagement-routing.module';
import { VerifynewstaffComponent } from './verifynewstaff/verifynewstaff.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgOtpInputModule} from 'ng-otp-input';
import { DropdownModule } from 'primeng/dropdown';
import {ToastModule} from 'primeng/toast';
import { ViewstaffComponent } from './viewstaff/viewstaff.component';
import { StaffRegisterComponent } from './staff-register/staff-register.component';
import { AddnewStaffComponent } from './addnew-staff/addnew-staff.component';
import { EditStaffComponent } from './edit-staff/edit-staff.component';



@NgModule({
  declarations: [
       VerifynewstaffComponent,
       StaffRegisterComponent,
       AddnewStaffComponent,
       EditStaffComponent,
       ViewstaffComponent
  ],
  imports: [
    CommonModule,
    StaffmanagementRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgOtpInputModule,
    DropdownModule,
    ToastModule
  ]
  
})
export class StaffmanagementModule { }
