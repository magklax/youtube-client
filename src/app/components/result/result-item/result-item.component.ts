import { Component, Input, OnInit } from '@angular/core';
import { IResultItem } from '../../../models/result-item.model';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss'],
})
export class ResultItemComponent implements OnInit {
  @Input() resultItem?: IResultItem;

  constructor() {}

  ngOnInit(): void {}
}
