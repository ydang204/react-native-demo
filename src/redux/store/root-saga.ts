import {all} from 'redux-saga/effects';

import userSaga from '@redux/user/user.saga';

export function* rootSaga() {
  yield all([...userSaga]);
}
