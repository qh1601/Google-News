import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import {HttpClientModule, HttpParams} from '@angular/common/http'

describe('ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ApiService],
    imports: [HttpClientModule],
  }));

  it('should be created', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });

  it('#get should get something', (done: DoneFn) => {
    const service: ApiService = TestBed.get(ApiService);
    const url = 'https://5b8d6fd35722ac0014317409.mockapi.io/example';
    const users = [{"id":"4","name":"name 4","color":"color 4"},{"id":"5","name":"name 5","color":"color 5"},{"id":"6","name":"name 6","color":"color 6"}]
    service.get({},url).subscribe(res => {
      expect(res).toEqual(users);
      done();
    })
  })

  it('#handelParams should handel params', () => {
    const service: ApiService = TestBed.get(ApiService);
    const searchParams = {category:'health',country:'us',apiKey:'1231546'};
    let mockParams = new HttpParams()
    .set('category','health')
    .set('country','us')
    .set('apiKey','1231546');
    expect(service.handlingParams(searchParams).toString()).toEqual(mockParams.toString());
  });
});
