import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PwdResetComponent } from './pwd-reset.component';

describe('PwdResetComponent', () => {
  let component: PwdResetComponent;
  let fixture: ComponentFixture<PwdResetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PwdResetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PwdResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
