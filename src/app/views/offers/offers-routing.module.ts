import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OffersComponent } from './offers.component';
import { OffersDetailComponent } from './offers-detail/offers-detail.component';
import { OffersDetailSmartComponent } from './offers-detail/offers-detail-smart.component';

const routes: Routes = [
  {
    path: '',
    component: OffersComponent
  },
  {
    path: 'my-offers',
    component: OffersComponent,
    data: { my_offers: true }
  },
  {
    path: ':id',
    component: OffersDetailSmartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffersRoutingModule {}
