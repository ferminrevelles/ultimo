import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { of, Observable} from 'rxjs';
import { catchError, exhaustMap, map, tap ,switchMap} from 'rxjs/operators';
import * as OffersActions from '../actions/offers.actions';
import {Offer} from '../../../models/offer.model';
import { OffersService } from '../../../services/offers.service';

@Injectable()
export class OfferEffects {
  
  constructor(
    private actions$: Actions,
    private offerService: OffersService ,
    private snackBar: MatSnackBar,
    private router:Router,
   
  ) {}

  OFFERS_ACTIONS_SUCCESS = [
    OffersActions.OffersActionTypes.OFFER_SUCCESS
  ];

  OFFERS_ACTIONS_FAILED = [
    OffersActions.OffersActionTypes.OFFER_FAILED
  ];

    @Effect()
    getOffers$ :Observable<any>= this.actions$.pipe(
      ofType(OffersActions.OffersActionTypes.OFFER),
      switchMap((action: any) =>
        this.offerService.getOffers().pipe(
            map((offers:Offer)=>{
              console.log("Obtiene Ofertas");
              return new OffersActions.OfferSuccess(offers);
            }),
            catchError(error=>of(new OffersActions.OfferFailed(error))),
          )
        )     
    );
  


  @Effect({ dispatch: false })
  successNotification$ = this.actions$.pipe(
    ofType(...this.OFFERS_ACTIONS_SUCCESS),
    tap(() =>
      this.snackBar.open('SUCCESS', 'Operation success', {
        duration: 2000
      })
    )
  );
  @Effect({ dispatch: false })
  failedNotification$ = this.actions$.pipe(
    ofType(...this.OFFERS_ACTIONS_FAILED),
    tap(() =>
      this.snackBar.open('FAILED', 'Operation failed', {
        duration: 2000
      })
    )
  );
}
