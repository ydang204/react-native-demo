import {combineReducers} from 'redux';

import {userReducer, UsersState} from '@redux/user/user.reducer';
import {loadingReducer, LoadingState} from '@redux/loading/loading.reducer';

export interface AppStates {
  users: UsersState;
  loading: LoadingState;
}

export const rootReducer = combineReducers<AppStates>({
  users: userReducer,
  loading: loadingReducer,
});
