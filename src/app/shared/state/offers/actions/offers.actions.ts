import { createAction, props } from '@ngrx/store';
import { Action } from '@ngrx/store';
import {User} from '../../../models/user.model';
import {Offer} from '../../../models/offer.model';

export enum OffersActionTypes {
  OFFER = '[Offer] getOffers',
  OFFER_SUCCESS = '[Offer] offer Success',
  OFFER_FAILED = '[Offer] offer Failed',

}

//----------------OBTENER OFERTAS--------------------
export class GetOffer implements Action{
  readonly type = OffersActionTypes.OFFER;
  constructor(){}
}

export class OfferSuccess implements Action {
  readonly type = OffersActionTypes.OFFER_SUCCESS;

  constructor(public offer: Offer) {}
}
export class OfferFailed implements Action {
  readonly type = OffersActionTypes.OFFER_FAILED;

  constructor(public message: string) {}
}

export type OffersActions =
|GetOffer
|OfferSuccess 
|OfferFailed
