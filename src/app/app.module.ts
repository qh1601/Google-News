import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { RightSideComponent } from './components/right-side/right-side.component';
import { ContentsComponent } from './components/main-content/contents/contents.component'
import { SuggestSearchComponent } from './components/header/suggest-search/suggest-search.component';
import { SearchFormComponent } from './components/header/search-form/search-form.component';
import { ShowApplicationComponent } from './components/header/show-application/show-application.component';
import { WeatherComponent } from './components/right-side/weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MainContentComponent,
    RightSideComponent,
    ContentsComponent,
    SuggestSearchComponent,
    SearchFormComponent,
    ShowApplicationComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
