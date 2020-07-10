import {Action} from 'redux-actions';
import {call, put, takeLatest, fork} from 'redux-saga/effects';

import {getUsersAsync, getUserDetailsAsync} from '@services/user-service';
import {UserAction} from './types';
import {
  getUsersSucceedAction,
  getUserDetailsSucceedAction,
} from './user.actions';
import {AxiosResponse} from 'axios';
import {GetUserResponse} from '@models/res-models/get-users.res-model';

function* handleGetUsersSaga(action: Action<number>) {
  try {
    const response: AxiosResponse<GetUserResponse> = yield call(
      getUsersAsync,
      action.payload,
    );

    const {
      data: {data},
    } = response;

    yield put(getUsersSucceedAction(data));
  } catch (error) {
    console.log(error);
  }
}

function* handleGetUsersSagaWatcher() {
  yield takeLatest(UserAction.GET_USERS, handleGetUsersSaga);
}

function* handleGetUserDetailsSaga(action: Action<number>) {
  try {
    const response = yield call(getUserDetailsAsync, action.payload);

    const {
      data: {data},
    } = response;
    yield put(getUserDetailsSucceedAction(data));
  } catch (error) {
    console.log(error);
  }
}

function* handleGetUserDetailsSagaWatcher() {
  yield takeLatest(UserAction.GET_USER_DETAILS, handleGetUserDetailsSaga);
}

export default [
  fork(handleGetUsersSagaWatcher),
  fork(handleGetUserDetailsSagaWatcher),
];
