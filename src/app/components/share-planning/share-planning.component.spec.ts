import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharePlanningComponent } from './share-planning.component';

describe('SharePlanningComponent', () => {
  let component: SharePlanningComponent;
  let fixture: ComponentFixture<SharePlanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharePlanningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharePlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
