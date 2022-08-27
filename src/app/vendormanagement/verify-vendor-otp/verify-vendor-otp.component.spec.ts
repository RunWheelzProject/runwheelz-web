import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyVendorOtpComponent } from './verify-vendor-otp.component';

describe('VerifyVendorOtpComponent', () => {
  let component: VerifyVendorOtpComponent;
  let fixture: ComponentFixture<VerifyVendorOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyVendorOtpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyVendorOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
