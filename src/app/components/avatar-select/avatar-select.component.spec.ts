import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarSelectComponent } from './avatar-select.component';

describe('AvatarSelectComponent', () => {
  let component: AvatarSelectComponent;
  let fixture: ComponentFixture<AvatarSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvatarSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvatarSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
