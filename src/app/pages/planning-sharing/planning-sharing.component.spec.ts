import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningSharingComponent } from './planning-sharing.component';

describe('PlanningSharingComponent', () => {
  let component: PlanningSharingComponent;
  let fixture: ComponentFixture<PlanningSharingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanningSharingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanningSharingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
