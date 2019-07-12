import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SearchFormComponent } from './search-form/search-form.component';
import { SuggestSearchComponent } from './suggest-search/suggest-search.component';
import { ShowApplicationComponent } from './show-application/show-application.component'
import { HeaderComponent } from './header.component';


describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent, SearchFormComponent, SuggestSearchComponent, ShowApplicationComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#toggleSidebar should toggle sidebar status', () => {
    const currentStatus = component.isShowSidebar;
    component.toggleSidebar();
    expect(component.isShowSidebar).not.toEqual(currentStatus);
  });

  it('#showSuggest should show search suggest', () => {
    component.showSuggest();
    expect(component.isShowSuggest).toEqual(true);
  });

  it('#hideSuggest should show search suggest', () => {
    component.hideSuggest();
    expect(component.isShowSuggest).toEqual(false);
  });


  it('#toggleForm should toggle search form status', () => {
    const currentStatus = component.isShowForm;
    component.toggleForm();
    expect(component.isShowForm).not.toEqual(currentStatus);
  });

  it('#toggleClear should toggle clear input status', () => {
    //check when input isn't clear
    component.input_value = "231231";
    component.toggleClear();
    expect(component.isClear).toEqual(false);

    //Check when input is clear
    component.input_value = "";
    component.toggleClear();
    expect(component.isClear).toEqual(true);
  });

  it('#clearInput should clear input', () => {
    const input = document.createElement('input');
    const onFocus = spyOn(input, 'focus');
    component.input_value = "2312312";
    component.clearInput(input);
    expect(component.isClear).toEqual(true);
    expect(component.input_value).toEqual('');
    expect(onFocus).toHaveBeenCalled();
  });

  it('#changeIcon should change icon value', () => {
    const value = true;
    component.changeIcon(value);
    expect(component.isShowForm).toEqual(value);
  });
});
