import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ShowApplicationComponent } from './show-application.component';

describe('ShowApplicationComponent', () => {
  let component: ShowApplicationComponent;
  let fixture: ComponentFixture<ShowApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShowApplicationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#showMore should display more app', () => {
    component.showMore();
    expect(component.isHide).toBe(true);
  });

  it('#onScroll should toggle display more app', () => {
    const onScrollDiv = spyOn(component,'onScroll');
    fixture.debugElement.query(By.css('.google-app')).triggerEventHandler('scroll',null);
    expect(onScrollDiv).toHaveBeenCalled();
    expect(component.isHide).toEqual(false);
  });
});
