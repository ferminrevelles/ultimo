import { Component, OnInit, Input } from '@angular/core';
import { Offer } from 'src/app/shared/models/offer.model';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-offers-profile',
  templateUrl: './offers-profile.component.html',
  styleUrls: ['./offers-profile.component.scss']
})
export class OffersProfileComponent implements OnInit {
  @Input() user:User;
  displayedColumnsOffers: string[] = ['puesto','empresa','familia','fecha','provincia','municipio','action'];

  offers: Offer[] = [];
  constructor() { }

  ngOnInit() {
    this.offers = this.user.offers;
  }
}
