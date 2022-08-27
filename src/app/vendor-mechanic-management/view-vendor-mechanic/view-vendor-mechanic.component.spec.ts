import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVendorMechanicComponent } from './view-vendor-mechanic.component';

describe('ViewVendorMechanicComponent', () => {
  let component: ViewVendorMechanicComponent;
  let fixture: ComponentFixture<ViewVendorMechanicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewVendorMechanicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewVendorMechanicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
