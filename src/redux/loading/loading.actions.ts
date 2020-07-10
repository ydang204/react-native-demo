import {createAction} from 'redux-actions';

export enum LoaderAction {
  ADD_LOADING = 'action/ADD_LOADING',
  REMOVE_LOADING = 'action/REMOVE_LOADING',
  REMOVE_ALL_LOADING = 'action/REMOVE_ALL_LOADING',
}

export const addLoading = createAction(
  LoaderAction.ADD_LOADING,
  (key: string) => key,
);

export const removeLoading = createAction(
  LoaderAction.REMOVE_LOADING,
  (key: string) => key,
);

export const removeAllLoading = createAction(LoaderAction.REMOVE_ALL_LOADING);
