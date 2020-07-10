import {createAction} from 'redux-actions';
import {UserAction} from './types';
import {UserResModel} from '@models/res-models/user-res-model';

//========Get users actions===============

/**
 * Get users actions
 */
export const getUsersAction = createAction(
  UserAction.GET_USERS,
  (page: number) => page,
);

/**
 * Get users succeed actions
 */
export const getUsersSucceedAction = createAction(
  UserAction.GET_USERS_SUCCEED,
  (users: UserResModel[]) => users,
);

//========Get users details actions===============

/**
 * Get users details actions
 */
export const getUserDetailsAction = createAction(UserAction.GET_USER_DETAILS);

/**
 * Get users details succeed actions
 */
export const getUserDetailsSucceedAction = createAction(
  UserAction.GET_USER_DETAILS_SUCCEED,
  (user: UserResModel) => user,
);
