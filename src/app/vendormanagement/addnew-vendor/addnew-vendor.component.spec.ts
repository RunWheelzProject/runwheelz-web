import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewVendorComponent } from './addnew-vendor.component';

describe('AddnewVendorComponent', () => {
  let component: AddnewVendorComponent;
  let fixture: ComponentFixture<AddnewVendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnewVendorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
