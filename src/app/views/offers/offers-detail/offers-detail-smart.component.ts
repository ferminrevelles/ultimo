import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store} from '@ngrx/store';
import { AppStore } from 'src/app/shared/models/store.interface';
import * as UserSelector from '../../../shared/state/user/selectors/user.selector';
import * as OfferSelector from '../../../shared/state/offers/selectors/offers.selector';
@Component({
  selector: 'app-profile-account-smart',
  template: `<app-offers-detail
    [user]="users$|async" [offers]="offers$|async"></app-offers-detail>`,
  
})
export class OffersDetailSmartComponent implements OnInit {
  public users$: Observable<any> = this.store$.select(UserSelector.selectAll);
  public offers$: Observable <any> = this.store$.select(OfferSelector.selectOffer); 
  
  constructor(private store$: Store<AppStore>) { }
  
  ngOnInit() {
  
  }

}
