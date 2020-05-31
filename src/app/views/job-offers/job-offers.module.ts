import { NgModule } from '@angular/core';

import { JobOffersRoutingModule } from './job-offers-routing.module';
import { JobOffersListComponent } from './job-offers-list/job-offers-list.component';
import { JobOffersComponent } from './job-offers.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from '../../material-module'

@NgModule({
  declarations: [JobOffersComponent,JobOffersListComponent ],
  imports: [SharedModule, JobOffersRoutingModule,MaterialModule  ],
  providers: []
})
export class JobOffersModule {}