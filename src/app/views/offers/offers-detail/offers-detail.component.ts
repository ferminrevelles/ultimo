import { Component, OnInit, Input } from '@angular/core';
import { Offer } from 'src/app/shared/models/offer.model';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import { Store } from '@ngrx/store';
import * as UserActions from '../../../shared/state/user/actions/user.actions';

@Component({
  selector: 'app-offers-detail',
  templateUrl: './offers-detail.component.html',
  styleUrls: ['./offers-detail.component.scss']
})
export class OffersDetailComponent implements OnInit {
  @Input() user: User;
  @Input() offers: Offer[]=[];
  offer: Offer;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store$:Store
  ) {}

  subscribeOffer() {
    const offers = [...this.user.offers,this.offer];
    const user = {...this.user,offers};
    this.store$.dispatch(new UserActions.Update(user));
    this.router.navigate(['/admin/profile']);
  }
  unsubscribeOffer(index) {
    const offers = [...this.user.offers];
    const id = offers.findIndex(offer=> offer.id=== index)
    offers.splice(id,1);
    const user = {...this.user,offers};
    this.store$.dispatch(new UserActions.Update(user));
    this.router.navigate(['/admin/profile']);
  }
  isSubscribe(): boolean {
    return !!this.user.offers.find(_offer => this.offer.id === _offer.id);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const offers = this.offers;

      const offerID = +params.id;
      this.offer = (offers.find(offer => offer.id === offerID) || {}) as Offer;
    });
  }
}
