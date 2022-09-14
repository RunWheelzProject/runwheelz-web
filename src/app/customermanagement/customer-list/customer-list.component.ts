import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/shared/models/customer';
import { CustomermangementService } from '../customermangement.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customerdata: Customer[] = [];
  id: any;
  loggedInUserRole: string = "";
  constructor(
    private CustomermangementService: CustomermangementService,
     public route: ActivatedRoute) { }


  ngOnInit(): void {
    const loggedInUser = JSON.parse(sessionStorage.getItem('staff_info') || '{}');
    this.loggedInUserRole = loggedInUser.roleName;
    this.CustomermangementService.getAllCustomers().subscribe(data => {
      this.customerdata = data;
    });
  }


  


}
