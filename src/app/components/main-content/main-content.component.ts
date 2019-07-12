import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { StatusService } from 'src/app/services/status.service';
import { fromEvent } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  @ViewChild('btn', { static: true }) button: ElementRef;
  isShowContent: boolean;
  constructor(private newsService: NewsService, private statusService: StatusService) {
  }

  ngOnInit() {
    this.getNews();
    const clicks = fromEvent(this.button.nativeElement, 'click');
    const result = clicks.pipe(
      tap(() => this.isShowContent = false),
      switchMap(() => this.newsService.getNews())
    );

    result.subscribe(res => {
      this.statusService.changeNews(res.articles);
      this.isShowContent = true;
    });
  }

  getNews() {
    this.newsService.getNews().subscribe(res => {
      this.statusService.changeNews(res.articles);
      this.isShowContent = true;
    });
  }
}
