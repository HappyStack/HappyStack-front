import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiCookiesComponent } from './ui-cookies.component';

describe('UiCookiesComponent', () => {
  let component: UiCookiesComponent;
  let fixture: ComponentFixture<UiCookiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiCookiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiCookiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
