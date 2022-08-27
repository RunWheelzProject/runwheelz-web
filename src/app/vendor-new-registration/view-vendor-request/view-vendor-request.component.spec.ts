import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVendorRequestComponent } from './view-vendor-request.component';

describe('ViewVendorRequestComponent', () => {
  let component: ViewVendorRequestComponent;
  let fixture: ComponentFixture<ViewVendorRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewVendorRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewVendorRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
