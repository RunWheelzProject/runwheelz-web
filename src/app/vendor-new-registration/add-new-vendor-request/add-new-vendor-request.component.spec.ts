import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewVendorRequestComponent } from './add-new-vendor-request.component';

describe('AddNewVendorRequestComponent', () => {
  let component: AddNewVendorRequestComponent;
  let fixture: ComponentFixture<AddNewVendorRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewVendorRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewVendorRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
