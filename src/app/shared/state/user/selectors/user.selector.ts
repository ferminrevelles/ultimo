import { createFeatureSelector, createSelector } from '@ngrx/store';

import { UserState } from '../../user.state';
import { AppStore } from 'src/app/shared/models/store.interface';

export const selectUserState = (state:AppStore)=>state.user

export const selectAll = createSelector(
  selectUserState,
  state => state.user
);

export const selectState = (state:AppStore)=>state

export const select = createSelector(
  selectState,
  state => state
);
