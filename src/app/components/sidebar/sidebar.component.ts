import { Component, OnInit } from '@angular/core';
import { StatusService } from 'src/app/services/status.service';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  constructor( private statusService: StatusService, private newService: NewsService ) { }
  selectedIndex = 0;

  categories = [
      {
        data: '',
        path: '/topstories',
        icon: 'play_newsstand',
        text: 'Top stories',
      },
      {
        data: '',
        path: '/foryou',
        icon: 'person',
        text: 'For you',
      },
      {
        path: '/favorites',
        data: '',
        icon: 'star_border',
        text: 'Favorites'
      },
      {
        path: '/search',
        icon: 'search',
        text: 'Saved searches'
      },
      {
        data: '',
        path: '/us',
        icon: 'flag',
        text: 'U.S'
      },
      {
        data: 'general',
        path: '/world',
        icon: 'public',
        text: 'World'
      },
      {
        data: 'business',
        path: '/business',
        icon: 'business',
        text: 'Business'
      },
      {
        data: 'technology',
        path: '/technology',
        icon: 'memory',
        text: 'Technology'
      },
      {
        data: 'entertainment',
        path: '/entertainment',
        icon: 'theaters',
        text: 'Entertainment'
      },
      {
        data: 'sport',
        path: '/sport',
        icon: 'directions_bike',
        text: 'Sports'
      },
      {
        data: 'science',
        path: '/science',
        icon: 'experiment',
        text: 'Science'
      },
      {
        data: 'health',
        path: '/health',
        icon: 'fitness_center',
        text: 'Health'
      },
  ];

  footers = [
    {
      link: 'https://www.google.com/intl/en/policies/privacy/',
      text: 'Privacy ·'
    },
    {
      link: 'https://www.google.com/producer/app/tos',
      text: 'Terms ·'
    },
    {
      link: 'https://www.google.com/about',
      text: 'About Google'
    },
  ];
  ngOnInit() {
  }

  changeCategory(i, data) {
    this.selectedIndex = i;
    this.statusService.changeCategory(data);
    this.newService.getNews().subscribe(res => {
      this.statusService.changeNews(res.articles);
    });
  }
}
