import {useSelector, useDispatch} from 'react-redux';

import {AppStates} from '@redux/store/root-reducer';
import {UsersState} from '@redux/user/user.reducer';
import {bindActionCreators} from 'redux';
import {getUserDetailsAction} from '@redux/user/user.actions';

export const useUsers = () => {
  // Use selector to get state from store
  const usersSelector = (state: AppStates): UsersState => state.users;
  const {userDetails} = useSelector<AppStates, UsersState>(usersSelector);

  // Use dispatch to get dispatch action
  const dispatch = useDispatch();

  // Bind action to dispatch
  const handleGetUserDetails = bindActionCreators(
    getUserDetailsAction,
    dispatch,
  );

  return {userDetails, handleGetUserDetails};
};
