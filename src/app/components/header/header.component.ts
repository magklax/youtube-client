import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  searchText = '';

  @Output() messageEvent = new EventEmitter<string>();

  collapsed = false;

  toggleVisibility() {
    this.collapsed = !this.collapsed;
  }

  sendSearchText() {
    this.messageEvent.emit(this.searchText);
  }

  sortBy(value: string) {
    console.log(value);
  }
}
