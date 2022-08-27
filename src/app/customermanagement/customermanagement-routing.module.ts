import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomermanagementComponent } from './customermanagement/customermanagement.component';

const routes: Routes = [
  {
    path: '',
    component: CustomermanagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomermanagementRoutingModule { }
