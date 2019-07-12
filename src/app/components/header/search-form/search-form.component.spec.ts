import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { SearchFormComponent } from './search-form.component';
import { cpus } from 'os';

describe('SearchFormComponent', () => {
  let component: SearchFormComponent;
  let fixture: ComponentFixture<SearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFormComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#toggleSearch should change search button status', () => {
    const button = document.createElement('button');
    //Check if button search is enable
    component.exact = 'asdasa';
    component.toggleSearch(button);
    expect(component.isDisabed).toBe(false);
    expect(button.className).toEqual('btn btn-search');

    //check if button search is disable
    component.exact ='';
    component.toggleSearch(button);
    expect(component.isDisabed).toBe(true);
    expect(button.className).toEqual('btn');
  });

  it('#clearAll should clear all field', () => {
    const button = document.createElement('button');
    component.exact = "asdasdads";
    component.excludeword = "adsadas";
    component.hasword =" dasad sda";
    component.website = "jhyyafdlsk";

    component.clearAll(button);
    expect(component.exact).toBe('');
    expect(component.excludeword).toBe('');
    expect(component.hasword).toBe('');
    expect(component.website).toBe('');
    expect(component.isDisabed).toBe(true);
    expect(button.className).toEqual('btn');
  });

});
