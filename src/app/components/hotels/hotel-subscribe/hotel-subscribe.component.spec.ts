import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelSubscribeComponent } from './hotel-subscribe.component';

describe('HotelSubscribeComponent', () => {
  let component: HotelSubscribeComponent;
  let fixture: ComponentFixture<HotelSubscribeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelSubscribeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
