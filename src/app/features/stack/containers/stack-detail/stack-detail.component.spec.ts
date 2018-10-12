import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackDetailComponent } from './stack-detail.component';

describe('StackDetailComponent', () => {
  let component: StackDetailComponent;
  let fixture: ComponentFixture<StackDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
