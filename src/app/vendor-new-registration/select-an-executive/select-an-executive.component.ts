import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { Vendorrequest } from 'src/app/shared/models/vendorrequest';
import { VendorNewRegistrationService } from '../vendor-new-registration.service';

@Component({
  selector: 'app-select-an-executive',
  templateUrl: './select-an-executive.component.html',
  styleUrls: ['./select-an-executive.component.scss']
})
export class SelectAnExecutiveComponent implements OnInit {


  vendorrequestdata: any;
  id!: number;
  errorMessage:string="";

  data:any;
  executiveForm:any;
  executiveList:any;

  selectAnExecutive = this.formBuilder.group({
    selectanexecutive: [null, [Validators.required]],
  });

  constructor(private formBuilder: FormBuilder, private vendorNewRegistrationService: VendorNewRegistrationService, public route: ActivatedRoute, private router:Router) {}

  ngOnInit() {

    this.patchValue();
    this.getExecutiveNames();


    this.id = this.route.snapshot.params['id'];
    this.vendorNewRegistrationService.getVendorRequestById(this.id).subscribe((data: Vendorrequest) => {
      this.vendorrequestdata = data;
    },
    (error) => {
      this.errorMessage = error.error.message;
      console.log(this.errorMessage)
    });
  }
  
  


  

  

  patchValue(){
    this.route.queryParams.subscribe((params) => {
      console.log(params)
      this.data = JSON.parse(atob(params['data']));
      console.log(this.data);
    
      this.selectAnExecutive.patchValue({
        selectanexecutive: this.data.selectanexecutive
      });
    })
  }

  getExecutiveNames() {
    this.vendorNewRegistrationService.getExecutiveNames().subscribe((data: any) => {
      this.executiveList = data;
      console.log(this.executiveList);
      (error: any) =>
        this.errorMessage = error;
    }
    );
  }

  get f() {
    return this.selectAnExecutive.controls;
  }


  onSubmitAssignAnExecutive() {

    this.executiveForm = this.selectAnExecutive.value;
    let id = this.selectAnExecutive.value.id;

    let obj = {
      selectanexecutive: this.executiveForm.selectanexecutive,
    }

    console.log(obj)

    this.vendorNewRegistrationService.updateExecutiveinfo(id, obj).subscribe(
      (data: any) => {
        if (this.selectAnExecutive.invalid) {
          for (const control of Object.keys(this.selectAnExecutive.controls)) {
            this.selectAnExecutive.controls[control].markAsTouched();
          }
          return;
        }
        else {
          this.router.navigate(['/vendor-new-regisration/vendor-new-regisration']);
        }
      },
      (error) => {
        this.errorMessage = error.error.message;
        console.log(this.errorMessage)
      });
  }
}


