import { UserState } from '../../shared/state/user.state';
import { OfferState } from '../state/offers.state';

export interface AppStore {
  user: UserState;
  offer: OfferState;
}

