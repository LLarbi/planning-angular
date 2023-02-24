import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPlanningsComponent } from './my-plannings.component';

describe('MyPlanningsComponent', () => {
  let component: MyPlanningsComponent;
  let fixture: ComponentFixture<MyPlanningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPlanningsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPlanningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
