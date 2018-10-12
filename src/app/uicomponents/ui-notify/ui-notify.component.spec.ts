import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiNotifyComponent } from './ui-notify.component';

describe('UiNotifyComponent', () => {
  let component: UiNotifyComponent;
  let fixture: ComponentFixture<UiNotifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiNotifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiNotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
