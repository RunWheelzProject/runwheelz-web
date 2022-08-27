import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../shared/components/layout/layout.component';
import { AddNewVendorComponent } from './add-new-vendor/add-new-vendor.component';
import { ExecutiveListComponent } from './executive-list/executive-list.component';

const routes: Routes = [
  {
    path:'', component:ExecutiveListComponent
  },
  
  {
    path: 'addnewvendor/:id',
    component: LayoutComponent,
    children: [
      { path: '', component: AddNewVendorComponent },
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExecutiveRoutingModule { }
