import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/shared/services/profile.service';
import { SigninService } from '../../signin.service';
import { Store } from '@ngrx/store';
import * as OffersActions from '../../shared/state/offers/actions/offers.actions';
import { Offer } from '../../shared/models/offer.model';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private store$: Store<Offer>) {}
  ngOnInit(){
  this.store$.dispatch(new OffersActions.GetOffer());
  }
  
}

