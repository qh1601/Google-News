import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RightSideComponent } from './components/right-side/right-side.component';
import { SearchFormComponent } from 'src/app/components/header/search-form/search-form.component'
import { SuggestSearchComponent } from 'src/app/components/header/suggest-search/suggest-search.component';
import { ShowApplicationComponent } from 'src/app/components/header/show-application/show-application.component';
import { ContentsComponent } from 'src/app/components/main-content/contents/contents.component';
import { WeatherComponent } from 'src/app/components/right-side/weather/weather.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        HttpClientModule,
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        MainContentComponent,
        SidebarComponent,
        RightSideComponent,
        SearchFormComponent,
        SuggestSearchComponent,
        ShowApplicationComponent,
        ContentsComponent,
        WeatherComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'google-news'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('google-news');
  // });

  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to google-news!');
  // });
});
