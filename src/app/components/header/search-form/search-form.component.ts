import { Component, OnInit, Input, HostListener, Output, EventEmitter } from '@angular/core';
import { StatusService } from 'src/app/services/status.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})

export class SearchFormComponent implements OnInit {
  @Output() iconChange = new EventEmitter();
  isDisplay;
  isDisabed = true;
  exact = '';
  hasword = '';
  excludeword = '';
  website = '';

  constructor(private statusService: StatusService) { }

  ngOnInit() {
    this.statusService.isShowForm.subscribe(status => this.isDisplay = status);
  }

  clickedInside($event: Event) {
    $event.preventDefault();
    $event.stopPropagation();
  }

  @HostListener('document:click', ['$event']) clickedOutside(e) {
    if (e.target.id !== 'open-form') {
      this.isDisplay = false;
      this.statusService.changeFormStatus(this.isDisplay);
    }
  }

  toggleSearch(search) {
    if (this.exact !== '' || this.hasword !== '' || this.excludeword !== '' || this.website !== '' ) {
      this.isDisabed = false;
      search.className = 'btn btn-search';
    } else {
      this.isDisabed = true;
      search.className = 'btn';
    }
  }

  clearAll(search) {
    this.exact = this.hasword = this.excludeword = this.website = '';
    this.toggleSearch(search);
  }
}
