import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StatusService {
  private suggestSource = new BehaviorSubject<boolean>(false);
  private formSource = new BehaviorSubject<boolean>(false);
  private appSource = new BehaviorSubject<boolean>(false);
  private sidebarSource = new BehaviorSubject<boolean>(true);
  private categorySource = new BehaviorSubject<string>('');
  private newsSource = new BehaviorSubject<any[]>([]);

  newsData = this.newsSource.asObservable();
  category = this.categorySource.asObservable();
  isShowSuggest = this.suggestSource.asObservable();
  isShowForm = this.formSource.asObservable();
  isShowApp = this.appSource.asObservable();
  isShowSidebar = this.sidebarSource.asObservable();

  constructor() { }

  changeNews(value: any[]) {
    this.newsSource.next(value);
  }

  changeCategory(value: string) {
    this.categorySource.next(value);
  }

  changeSuggestStatus(value: boolean) {
    this.suggestSource.next(value);
  }

  changeFormStatus(value: boolean) {
    this.formSource.next(value);
  }

  changeAppStatus(value: boolean) {
    this.appSource.next(value);
  }

  changeSidebarStatus(value: boolean) {
    this.sidebarSource.next(value);
  }
}
