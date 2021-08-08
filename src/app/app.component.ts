import { Component } from '@angular/core';
import { resultItems } from './app.constans';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'youtube-client';

  resultItems = resultItems;
}
