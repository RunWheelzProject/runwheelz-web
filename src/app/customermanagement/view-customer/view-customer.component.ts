import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/shared/models/customer';
import { CustomermangementService } from '../customermangement.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.scss']
})
export class ViewCustomerComponent implements OnInit {

  customerdata: any;
  id!: number;
  errorMessage:string="";

  constructor(private CustomermangementService: CustomermangementService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.CustomermangementService.getCustomerById(this.id).subscribe((data: Customer) => {
      this.customerdata = data;
    },
    (error) => {
      this.errorMessage = error.error.message;
      console.log(this.errorMessage)
    });
  }

}
