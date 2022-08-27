import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VendorMechanic } from 'src/app/shared/models/vendor-mechanic';
import { VendorMechanicService } from '../vendor-mechanic.service';

@Component({
  selector: 'app-view-vendor-mechanic',
  templateUrl: './view-vendor-mechanic.component.html',
  styleUrls: ['./view-vendor-mechanic.component.scss']
})
export class ViewVendorMechanicComponent implements OnInit {

  

  vendorMechanicdata: any;
  id!: number;
  errorMessage:string="";

  constructor(private vendorMechanicService: VendorMechanicService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.vendorMechanicService.getVendorMechanicById(this.id).subscribe((data: VendorMechanic) => {
      this.vendorMechanicdata = data;
    },
    (error) => {
      this.errorMessage = error.error.message;
      console.log(this.errorMessage)
    });
  }



}
