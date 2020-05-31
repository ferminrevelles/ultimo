import { Component, OnInit, Input } from '@angular/core';
import { Offer } from 'src/app/shared/models/offer.model';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.scss'],
})
export class OffersListComponent implements OnInit {
  @Input() user:User;
  @Input() offers: Offer[]=[];
  offersStudy: Offer[] = [];
  offersOther: Offer[] = [];
  displayedColumnsOffersOk: string[] = ['puesto','empresa','familia','fecha','provincia','municipio','inscrito','action'];
  displayedColumnsOffersKo: string[] = ['puesto','empresa','familia','fecha','provincia','municipio'];
  constructor() { }

  private selectOffers() {
    const studiesOfUser = this.user.studies;
    const offersOfUser = this.user.offers; 

    this.offersStudy = this.offers //Retorna las ofertas que hay en el store y comparadas con los studio del usuario
      .filter(offer =>
        studiesOfUser.some(study => study.category.uid === offer.category.uid)
      )
      .map(offer => {
        const offerUser = !!offersOfUser.find(
          _offerUser => _offerUser.id === offer.id
        );
        return { ...offer, subscribe: offerUser };
      });

    this.offersOther = this.offers.filter(offer =>
      studiesOfUser.every(study => study.uid !== offer.category.uid)
    );
  }

  ngOnInit() {
    this.selectOffers();
  }
}
