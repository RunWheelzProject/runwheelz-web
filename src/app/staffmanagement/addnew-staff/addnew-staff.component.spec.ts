import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewStaffComponent } from './addnew-staff.component';

describe('AddnewStaffComponent', () => {
  let component: AddnewStaffComponent;
  let fixture: ComponentFixture<AddnewStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnewStaffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
