import {
    ActionReducer,
    ActionReducerMap,
    MetaReducer
  } from '@ngrx/store';
import { Auth } from '../modules/models/interface.service';
import { AuthReducer } from './reducer';
import { localStorageSync } from 'ngrx-store-localstorage';

export interface State {
    auth: Auth;
  }

export const reducers: ActionReducerMap<State> = {
    auth: AuthReducer
  };
export function localStorageSyncReducer(
    reducer: ActionReducer<any>
  ): ActionReducer<any> {
    return localStorageSync({
      keys: [{
        auth: ['auth']
      }],
      rehydrate: true
    })(reducer);
  }
