import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from  '@ngrx/store';
import { AppStore } from 'src/app/shared/models/store.interface';
import * as OfferSelector from '../../shared/state/offers/selectors/offers.selector';
@Component({
  selector: 'app-job-offers',
  templateUrl: './job-offers.component.html',
  styleUrls: ['./job-offers.component.scss']
})
export class JobOffersComponent implements OnInit {
  public offers$: Observable <any> = this.store$.select(OfferSelector.selectOffer);  
  constructor(private store$: Store<AppStore>) { }

  ngOnInit(): void {
  }

}
