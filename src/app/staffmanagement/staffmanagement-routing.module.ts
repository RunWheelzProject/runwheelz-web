import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../shared/components/layout/layout.component';
import { AddnewStaffComponent } from './addnew-staff/addnew-staff.component';
import { EditStaffComponent } from './edit-staff/edit-staff.component';
import { StaffRegisterComponent } from './staff-register/staff-register.component';
import { Stafflist } from './stafflist/stafflist.component';
import { StaffmanagementModule } from './staffmanagement.module';
import { VerifynewstaffComponent } from './verifynewstaff/verifynewstaff.component';
import { ViewstaffComponent } from './viewstaff/viewstaff.component';


const routes: Routes = [
  {
    path: '',
    component: Stafflist
  },
 
  {
    path: 'staffregister',
    component: LayoutComponent,
    children: [
      { path: '', component: StaffRegisterComponent },
    ]
  },
  {
    path: 'verifynewstaff',
    component: LayoutComponent,
    children: [
      { path: '', component: VerifynewstaffComponent },
    ]
  },
  {
    path: 'addnewstaff',
    component: LayoutComponent,
    children: [
      { path: '', component: AddnewStaffComponent },
    ]
  },
  {
    path: 'viewstaff/:id',
    component:LayoutComponent,
    children:[
      {
        path:'', component:ViewstaffComponent
      }
    ]
  },
  {
    path: 'editstaff/:id',
    component:LayoutComponent,
    children:[
      {
        path:'', component:EditStaffComponent
      }
    ]
  },
  
  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffmanagementRoutingModule { }
