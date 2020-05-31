import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffersRoutingModule } from './offers-routing.module';
import { OffersComponent } from './offers.component';
import { OffersDetailComponent } from './offers-detail/offers-detail.component';
import { OffersDetailSmartComponent} from '../offers/offers-detail/offers-detail-smart.component';
import { OffersListComponent } from './offers-list/offers-list.component';
import { OffersProfileComponent } from './offers-profile/offers-profile.component';
import { MaterialModule } from '../../material-module'

@NgModule({
  declarations: [
    OffersComponent,
    OffersProfileComponent,
    OffersListComponent,
    OffersDetailComponent,
    OffersDetailSmartComponent
  ],
  imports: [CommonModule, OffersRoutingModule,MaterialModule ]
})
export class OffersModule {}
