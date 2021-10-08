import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantInfosComponent } from './restaurant-infos.component';

describe('RestaurantInfosComponent', () => {
  let component: RestaurantInfosComponent;
  let fixture: ComponentFixture<RestaurantInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
