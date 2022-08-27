import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorRegisterRequestComponent } from './vendor-register-request.component';

describe('VendorRegisterRequestComponent', () => {
  let component: VendorRegisterRequestComponent;
  let fixture: ComponentFixture<VendorRegisterRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorRegisterRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorRegisterRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
