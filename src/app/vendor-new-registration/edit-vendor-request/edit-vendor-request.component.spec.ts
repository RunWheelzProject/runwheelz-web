import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVendorRequestComponent } from './edit-vendor-request.component';

describe('EditVendorRequestComponent', () => {
  let component: EditVendorRequestComponent;
  let fixture: ComponentFixture<EditVendorRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditVendorRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVendorRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
