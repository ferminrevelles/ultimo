import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppStore } from 'src/app/shared/models/store.interface';

export const selectOfferState = (state:AppStore)=>state.offer

export const selectOffer = createSelector(
  selectOfferState,
  state => state.offers 
);