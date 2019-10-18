import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAirlineHotelDetialsComponent } from './view-airline-hotel-detials.component';

describe('ViewAirlineHotelDetialsComponent', () => {
  let component: ViewAirlineHotelDetialsComponent;
  let fixture: ComponentFixture<ViewAirlineHotelDetialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAirlineHotelDetialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAirlineHotelDetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
