import { IResultItem } from './result-item.model';

export interface IResult {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: IResultItem;
}
