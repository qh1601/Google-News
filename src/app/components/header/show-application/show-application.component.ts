import { Component, OnInit, Input, HostListener } from '@angular/core';
import { StatusService } from 'src/app/services/status.service';

@Component({
  selector: 'app-show-application',
  templateUrl: './show-application.component.html',
  styleUrls: ['./show-application.component.css']
})
export class ShowApplicationComponent implements OnInit {
  isShowApp: boolean;
  isHide = false;
  constructor(private statusService: StatusService) {}

  ngOnInit() {
    this.statusService.isShowApp.subscribe(
      status => (this.isShowApp = status)
    );
  }

  onScroll(e) {
    this.isHide = true;
    if (e.target.scrollTop === 0) {
      this.isHide = false;
    }
  }

  showMore() {
    this.isHide = true;
  }

  clickedInside($event: Event) {
    $event.preventDefault();
    $event.stopPropagation();
  }

  @HostListener('click', ['$event']) clickedOutside(e) {
    if (e.target.id !== 'show-app') {
      this.isShowApp = false;
      this.statusService.changeAppStatus(this.isShowApp);
    }
  }
}
