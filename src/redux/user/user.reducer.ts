import {handleActions, Action} from 'redux-actions';

import {
  UserResModel,
  initialUserResModel,
} from '@models/res-models/user-res-model';
import {
  getUsersSucceedAction,
  getUserDetailsSucceedAction,
} from './user.actions';

export interface UsersState {
  users: UserResModel[];
  userDetails: UserResModel;
}

const initialState: UsersState = {
  users: [],
  userDetails: {...initialUserResModel},
};

export const userReducer = handleActions(
  new Map<any, any>([
    [
      getUsersSucceedAction,
      (state: UsersState, action: Action<UserResModel[]>): UsersState => ({
        ...state,
        users: [...action.payload],
      }),
    ],
    [
      getUserDetailsSucceedAction,
      (state: UsersState, action: Action<UserResModel>): UsersState => ({
        ...state,
        userDetails: {...action.payload},
      }),
    ],
  ]) as any,
  initialState,
);
