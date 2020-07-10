import {handleActions, Action} from 'redux-actions';
import {addLoading, removeLoading, removeAllLoading} from './loading.actions';

export interface LoadingState {
  keys: string[];
  isLoading: boolean;
}

const initialState: LoadingState = {
  isLoading: false,
  keys: [],
};

export const loadingReducer = handleActions(
  new Map<any, any>([
    [
      addLoading,
      (state: LoadingState, action: Action<string>) => ({
        isLoading: true,
        keys: [...state.keys, action.payload],
      }),
    ],
    [
      removeLoading,
      (state: LoadingState, action: Action<string>) => {
        const newKeys = [...state.keys.filter((k) => k !== action.payload)];
        return {
          isLoading: newKeys.length > 0,
          keys: [...newKeys],
        };
      },
    ],
    [
      removeAllLoading,
      () => ({
        isLoading: false,
        keys: [],
      }),
    ],
  ]) as any,
  initialState,
);
