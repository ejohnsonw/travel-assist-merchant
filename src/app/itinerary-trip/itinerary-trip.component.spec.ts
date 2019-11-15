import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItineraryTripComponent } from './itinerary-trip.component';

describe('ItineraryTripComponent', () => {
  let component: ItineraryTripComponent;
  let fixture: ComponentFixture<ItineraryTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItineraryTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItineraryTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
