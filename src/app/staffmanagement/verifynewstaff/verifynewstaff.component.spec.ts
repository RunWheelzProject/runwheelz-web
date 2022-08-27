import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifynewstaffComponent } from './verifynewstaff.component';

describe('VerifynewstaffComponent', () => {
  let component: VerifynewstaffComponent;
  let fixture: ComponentFixture<VerifynewstaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifynewstaffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifynewstaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
