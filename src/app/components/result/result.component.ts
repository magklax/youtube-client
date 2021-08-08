import { Component, Input, OnInit } from '@angular/core';
import { IResultItem } from 'src/app/models/result-item.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  @Input() resultItems: IResultItem[] = [];

  constructor() {}

  ngOnInit(): void {}
}
