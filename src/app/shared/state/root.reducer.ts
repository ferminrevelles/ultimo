// root-reducer
import {
    ActionReducerMap,
    MetaReducer
} from '@ngrx/store';

import { environment } from '../../../environments/environment';
import { routerReducer } from '@ngrx/router-store';
import { userReducer } from './user/reducers/user.reducer';
import { offerReducer} from './offers/reducers/offers.reducer'

export interface State {}
export const metaReducers: MetaReducer<State>[]=!environment.production? []: [];

export const reducers = { 
    user: userReducer,
    offer: offerReducer,
    router:routerReducer,
    
};

