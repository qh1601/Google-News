import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSideComponent } from './right-side.component';
import {WeatherComponent} from './weather/weather.component'

describe('RightSideComponent', () => {
  let component: RightSideComponent;
  let fixture: ComponentFixture<RightSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightSideComponent, WeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
