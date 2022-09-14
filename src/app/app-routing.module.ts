import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { OtpComponent } from './otp/otp.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { StaffLoginComponent } from './staff-login/staff-login.component';
import { MainscreenComponent } from './mainscreen/component/mainscreen/mainscreen.component';

//import { StaffmanagementComponent } from './staffmanagement/staffmanagement/staffmanagement.component';
const routes: Routes = [
  {
    path: '',
    component: MainscreenComponent,
    children: [{
      path: '',
      loadChildren: () =>

        import('./mainscreen/mainscreen.module').then((mainscreen) => mainscreen.MainscreenModule),
    }]
  },
  { path: 'home', component: MainscreenComponent },
  { path: 'contactus', component: MainscreenComponent },
  { path: 'aboutus', component: MainscreenComponent },
  { path: 'services', component: MainscreenComponent },

  {
    path: 'staff',
    component: StaffLoginComponent
  },
  {
    path: 'otp',
    component: OtpComponent
  },


  {
    path: 'dashboard',
    component: LayoutComponent,
    children: [


      {
        path: '',
        component: DashboardComponent,
      }
      // { path: '/dashboard/dashboard', redirectTo: 'dashboard', pathMatch: 'full' },
      // {
      // path: 'dashboard',
      //  loadChildren: () => import('./dashboard/dashboard.module').then(dashboard => dashboard.DashboardModule),
      // }

    ]
  },
  {
    path: 'staffmanagement',
    component: LayoutComponent,
    children: [
      // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'staffmanagement',
        loadChildren: () => import('./staffmanagement/staffmanagement.module').then(staffmanagement => staffmanagement.StaffmanagementModule),
      }

    ]
  },
  

  {
    path: 'vendormanagement',
    component: LayoutComponent,
    children: [
      
      {
        path: 'vendormanagement',
        loadChildren: () => import('./vendormanagement/vendormanagement.module').then(vendormanagement => vendormanagement.VendormanagementModule),
      }

    ]
  },
  
  
  {
    path: 'vendor-mechanic-management',
    component: LayoutComponent,
    children: [
      
      {
        path: 'vendor-mechanic-management',
        loadChildren: () => import('./vendor-mechanic-management/vendor-mechanic-management.module').then(VendorMechanicManagement => VendorMechanicManagement.VendorMechanicManagementModule),
      }

    ]
  },
  {
    path: 'vendor-new-registration',
    component: LayoutComponent,
    children: [
      
      {
        path: 'vendor-new-registration',
        loadChildren: () => import('./vendor-new-registration/vendor-new-registration.module').then(VendorNewRegistration => VendorNewRegistration.VendorNewRegistrationModule),
      }

    ]
  },
 
  {
    path: 'customermanagement',
    component: LayoutComponent,
    children: [
      // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'customermanagement',
        loadChildren: () => import('./customermanagement/customermanagement.module').then(customermanagemnt => customermanagemnt.CustomermanagementModule),
      }

    ]
  },
  {
    path: 'ordersmanagement',
    component: LayoutComponent,
    children: [
      // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'ordersmanagement',
        loadChildren: () => import('./ordersmanagement/ordersmanagement.module').then(ordermanagement => ordermanagement.OrdersmanagementModule),
      }

    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
