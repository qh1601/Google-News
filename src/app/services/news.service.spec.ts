import { TestBed } from '@angular/core/testing';

import { NewsService } from './news.service';
import { HttpClientModule } from '@angular/common/http'

describe('News Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
  });

  it('should be created', () => {
    const service: NewsService = TestBed.get(NewsService);
    expect(service).toBeTruthy();
  });

  it('#getCategory should get category', () => {
    const service: NewsService = TestBed.get(NewsService);
    service.getCategory();
    expect(service.searchParams.category).not.toBeNull();
  });

  // it('#getNews should get news', (done: DoneFn) => {
  //   const service: NewsService = TestBed.get(NewsService);
  //   service.getNews().subscribe(res => {
  //     expect(res.articles.length).toBeGreaterThan(0);
  //     done();
  //   })
  // });
});
