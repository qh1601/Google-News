import { TestBed } from '@angular/core/testing';

import { StatusService } from './status.service';

describe('StatusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StatusService = TestBed.get(StatusService);
    expect(service).toBeTruthy();
  });

  it('#changeCategory should update category', (done: DoneFn) => {
    const service: StatusService = TestBed.get(StatusService);
    const category = 'entertainment';
    service.changeCategory(category);
    service.category.subscribe(res => {
      expect(res).toEqual(category);
      done(); 
    })
  });

  it('#changeSuggestStatus should update suggest status', (done: DoneFn) => {
    const service: StatusService = TestBed.get(StatusService);
    const status = true;
    service.changeSuggestStatus(status);
    service.isShowSuggest.subscribe(res => {
      expect(res).toEqual(status);
      done(); 
    })
  });

  it('#changeFormStatus should update search form status', (done: DoneFn) => {
    const service: StatusService = TestBed.get(StatusService);
    const status = true;
    service.changeFormStatus(status);
    service.isShowForm.subscribe(res => {
      expect(res).toEqual(status);
      done(); 
    })
  });

  it('#changeAppStatus should update show more app status', (done: DoneFn) => {
    const service: StatusService = TestBed.get(StatusService);
    const status = true;
    service.changeAppStatus(status);
    service.isShowApp.subscribe(res => {
      expect(res).toEqual(status);
      done(); 
    })
  });

  it('#changeSidebarStatus should update sidebar status', (done: DoneFn) => {
    const service: StatusService = TestBed.get(StatusService);
    const status = true;
    service.changeSidebarStatus(status);
    service.isShowSidebar.subscribe(res => {
      expect(res).toEqual(status);
      done(); 
    })
  });

  it('#changeNews should update news', (done: DoneFn) => {
    const service: StatusService = TestBed.get(StatusService);
    const test = [
      {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
      },
      {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
          "street": "Victor Plains",
          "suite": "Suite 879",
          "city": "Wisokyburgh",
          "zipcode": "90566-7771",
          "geo": {
            "lat": "-43.9509",
            "lng": "-34.4618"
          }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
          "name": "Deckow-Crist",
          "catchPhrase": "Proactive didactic contingency",
          "bs": "synergize scalable supply-chains"
        }
      },
      {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
          "street": "Douglas Extension",
          "suite": "Suite 847",
          "city": "McKenziehaven",
          "zipcode": "59590-4157",
          "geo": {
            "lat": "-68.6102",
            "lng": "-47.0653"
          }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
          "name": "Romaguera-Jacobson",
          "catchPhrase": "Face to face bifurcated interface",
          "bs": "e-enable strategic applications"
        }
      }
    ]
    service.changeNews(test);
    service.newsData.subscribe(res => {
      expect(res).toEqual(test);
      done(); 
    })
  });


});
