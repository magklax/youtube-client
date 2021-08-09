import { Component, Input } from '@angular/core';
import { IResultItem } from '../../../models/result-item.model';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss'],
})
export class ResultItemComponent {
  @Input() resultItem?: IResultItem;
}
