import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularAirlinesAndHotelsComponent } from './popular-airlines-and-hotels.component';

describe('PopularAirlinesAndHotelsComponent', () => {
  let component: PopularAirlinesAndHotelsComponent;
  let fixture: ComponentFixture<PopularAirlinesAndHotelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularAirlinesAndHotelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularAirlinesAndHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
