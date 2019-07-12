import { Injectable } from '@angular/core';
import { StatusService } from './status.service';
import { ApiService } from './api.service';
import { environment } from 'src/environments/environment';
import { ApiForNews } from '../models/api';


@Injectable({
  providedIn: 'root'
})
export class NewsService {
  apiForNews = new ApiForNews();
  searchParams = {
    category: '',
    country: 'us',
    apikey: this.apiForNews.key,
  };
  url = environment.API_BASE_URL_FOR_NEWS;

  constructor(private statusService: StatusService, private apiService: ApiService) {

  }

  getNews() {
    this.getCategory();
    return this.apiService.get(this.searchParams, this.url);
  }


  getCategory() {
    this.statusService.category.subscribe(res => this.searchParams.category = res);
  }


}
