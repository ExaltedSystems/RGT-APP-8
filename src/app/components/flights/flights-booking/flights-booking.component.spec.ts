import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsBookingComponent } from './flights-booking.component';

describe('FlightsBookingComponent', () => {
  let component: FlightsBookingComponent;
  let fixture: ComponentFixture<FlightsBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightsBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightsBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
