import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningsSharedComponent } from './plannings-shared.component';

describe('PlanningSharedComponent', () => {
  let component: PlanningsSharedComponent;
  let fixture: ComponentFixture<PlanningsSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanningsSharedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanningsSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
