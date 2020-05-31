import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from  '@ngrx/store';
import { AppStore } from 'src/app/shared/models/store.interface';
import * as UserSelector from '../../shared/state/user/selectors/user.selector';
import * as OfferSelector from '../../shared/state/offers/selectors/offers.selector';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OffersComponent implements OnInit {
  public users$ : Observable <any> = this.store$.select(UserSelector.selectAll);
  public offers$: Observable <any> = this.store$.select(OfferSelector.selectOffer);  

  isOffersList = true;
  constructor(private route: ActivatedRoute, private store$: Store<AppStore>) {
    this.route.data.subscribe(
      params => (this.isOffersList = !params.my_offers)
    );
  }

  ngOnInit() {
    
  }
}
