import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyNewVendorRequestComponent } from './verify-new-vendor-request.component';

describe('VerifyNewVendorRequestComponent', () => {
  let component: VerifyNewVendorRequestComponent;
  let fixture: ComponentFixture<VerifyNewVendorRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyNewVendorRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyNewVendorRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
