import { ViewType } from '../constants/common.constant';

/** interface for item data*/
export interface Item {
  id: number;
  number: number;
  name: string;
  date: string;
  type: ViewType;
  imageUrl: string;
  url: string;
  details: string;
}
