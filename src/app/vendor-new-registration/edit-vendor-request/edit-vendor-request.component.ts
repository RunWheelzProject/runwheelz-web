import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendorrequest } from 'src/app/shared/models/vendorrequest';
import { VendorNewRegistrationService } from '../vendor-new-registration.service';

@Component({
  selector: 'app-edit-vendor-request',
  templateUrl: './edit-vendor-request.component.html',
  styleUrls: ['./edit-vendor-request.component.scss']
})
export class EditVendorRequestComponent implements OnInit {

  id: any;
  vendorrequestdata!: Vendorrequest;
  form!: FormGroup;
  latitude!:number;
  longitude!:number;

  constructor(private vendorNewRegistrationService: VendorNewRegistrationService, public route: ActivatedRoute, public router: Router) { }

  
  ngOnInit(): void {

    this.id = this.route.snapshot.params['id']
    this.vendorNewRegistrationService.getVendorRequestById(this.id).subscribe((data: Vendorrequest) => {
      this.vendorrequestdata = data;
      console.log(this.vendorrequestdata.id);

    });
    this.form = new FormGroup({
      id: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      ownerName: new FormControl('', [Validators.required]),
      garageName: new FormControl('', [Validators.required]),
      latitude: new FormControl('', [Validators.required]),
      longitude: new FormControl('', [Validators.required])
    });
  }


  onSubmit() {
    this.vendorNewRegistrationService.updateVendorRequestinfo(this.id, this.form.value).subscribe(data => {
      this.vendorrequestdata = data;
      this.router.navigate(['/vendor-new-registration/vendor-new-registration'])
    })
  }


}
