import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PwdForgottenComponent } from './pwd-forgotten.component';

describe('PwdForgottenComponent', () => {
  let component: PwdForgottenComponent;
  let fixture: ComponentFixture<PwdForgottenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PwdForgottenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PwdForgottenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
