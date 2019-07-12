import { Component, OnInit } from '@angular/core';
import { StatusService } from './services/status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'google-news';
  isShowSidebar;
  constructor(private _statusService:StatusService) {}
  ngOnInit() {
    this._statusService.isShowSidebar.subscribe(status => this.isShowSidebar = status);
  }
}
