import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Stafflist } from './stafflist.component';


describe('StafflistComponent', () => {
  let component: Stafflist;
  let fixture: ComponentFixture<Stafflist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Stafflist ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Stafflist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
