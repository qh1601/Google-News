import { Component, OnInit } from '@angular/core';
import { StatusService } from 'src/app/services/status.service';
import { trigger, state, style, animate, transition, } from '@angular/animations';
import { Subject } from 'rxjs';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        overflow: 'visible',
        maxHeight: '300px',
      })),
      state('closed', style({
        maxHeight: '0',
        overflow: 'hidden'
      })),
      transition('open => closed', [
        animate('0.3s')
      ]),
      transition('closed => open', [
        animate('0.3s')
      ]),
    ]),
  ]
})

export class ContentsComponent implements OnInit {
  isShowMore = false;
  arrShowMore: boolean[];
  htmlString: string;
  contents = [];
  test;
  type: string;
  category: string;
  public destroyed = new Subject<any>();

  constructor(private statusService: StatusService) {
    this.htmlString = 'keyboard_arrow_down';
    this.arrShowMore = [];
  }

  ngOnInit() {
    this.statusService.newsData.subscribe(res => this.contents = res);
  }



  // Calulate time publish news
  calculateTime(s: string) {
    const t = new Date(s);
    const today = new Date();
    if (today.getDate() - t.getDate() === 1) {
      return 'yesterday';
    } else if (today.getDate() - t.getDate() < 1) {
      if (today.getHours() - t.getHours() === 0) {
        return today.getMinutes() - t.getMinutes() + ' minutes ago';
      } else {
        return today.getHours() - t.getHours() + ' hours ago';
      }
    } else {
      return today.getDate() - t.getDate() + ' days ago';
    }
  }

  showMore(i, e) {
    this.arrShowMore[i] = !this.arrShowMore[i];
    e.target.innerHTML = this.arrShowMore[i] ? 'keyboard_arrow_up' : 'keyboard_arrow_down';
  }
}
