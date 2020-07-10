import {useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import {useEffect} from 'react';

import {getUsersAction} from '@redux/user/user.actions';
import {AppStates} from '@redux/store/root-reducer';
import {UsersState} from '@redux/user/user.reducer';

export const useUsers = () => {
  // Use dispatch to get dispatch action
  const dispatch = useDispatch();

  // Bind action to dispatch
  const handleGetUsers = bindActionCreators(getUsersAction, dispatch);

  // Use selector to get state from store
  const usersSelector = (state: AppStates): UsersState => state.users;
  const {users} = useSelector<AppStates, UsersState>(usersSelector);

  useEffect(() => {
    console.log('use effect inside custom hook');
    handleGetUsers(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {handleGetUsers, users};
};
