import {UserResModel} from './user-res-model';

export interface GetUserResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: UserResModel[];
  ad: Ad;
}

export interface Ad {
  company: string;
  url: string;
  text: string;
}
