import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidUserComponent } from './android-user.component';

describe('AndroidUserComponent', () => {
  let component: AndroidUserComponent;
  let fixture: ComponentFixture<AndroidUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AndroidUserComponent]
    });
    fixture = TestBed.createComponent(AndroidUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
