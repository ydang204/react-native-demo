import {UserDetailsParam} from './user-details-param';

export interface MainStackNavigationParam {
  [index: string]: any;
  Home: undefined;
  Users: undefined;
  UserDetails: UserDetailsParam;
}
