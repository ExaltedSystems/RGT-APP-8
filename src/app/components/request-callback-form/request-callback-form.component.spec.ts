import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestCallbackFormComponent } from './request-callback-form.component';

describe('RequestCallbackFormComponent', () => {
  let component: RequestCallbackFormComponent;
  let fixture: ComponentFixture<RequestCallbackFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestCallbackFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestCallbackFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
