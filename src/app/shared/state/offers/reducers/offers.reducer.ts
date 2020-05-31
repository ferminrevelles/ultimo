import { OffersActionTypes, OffersActions } from '../actions/offers.actions';
import { Offer } from '../../../models/offer.model';

export interface AuthState {
    getOffers:boolean,
    offers:Offer,
}

export const initialAuthState: AuthState = {
  getOffers:false,
  offers: undefined,
};

export function offerReducer(
  
  state = initialAuthState,
  action: OffersActions): AuthState {
  switch (action.type) {
    case OffersActionTypes.OFFER_SUCCESS:
      return {
        getOffers:true,
        offers: action.offer,
      };

    default:
      return state;
  }
}
