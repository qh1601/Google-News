import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StatusService } from 'src/app/services/status.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isShowSidebar = true;
  isShowSuggest = false;
  isShowForm = false;
  isShowApp = false;
  isClear = true;
  inputValue = '';

  constructor(private statusService: StatusService) {}


  ngOnInit() {
    this.statusService.isShowSuggest.subscribe(status => this.isShowSuggest = status);
    this.statusService.isShowForm.subscribe(status => this.isShowForm = status);
    this.statusService.isShowApp.subscribe(status => this.isShowApp = status);
    this.statusService.isShowSidebar.subscribe(status => this.isShowSidebar = status);
  }

  toggleSidebar() {
    this.isShowSidebar = !this.isShowSidebar;
    this.statusService.changeSidebarStatus(this.isShowSidebar);
  }

  showSuggest() {
    this.isShowSuggest = true;
    this.statusService.changeSuggestStatus(this.isShowSuggest);
  }

  hideSuggest() {
    this.isShowSuggest = false;
    this.statusService.changeSuggestStatus(this.isShowSuggest);
  }

  toggleForm() {
    this.isShowForm = !this.isShowForm;
    this.statusService.changeFormStatus(this.isShowForm);
  }

  toggleClear() {
    if (this.inputValue !== '') {
      this.isClear = false;
    } else {
      this.isClear = true;
    }
  }

  clearInput(input) {
    this.inputValue = '';
    this.isClear = true;
    input.focus();
  }

  toggleShowApp() {
    this.isShowApp = !this.isShowApp;
    this.statusService.changeAppStatus(this.isShowApp);
  }

  changeIcon(value: boolean) {
    this.isShowForm = value;
  }
}
