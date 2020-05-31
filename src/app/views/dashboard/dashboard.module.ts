import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from '../../material-module'
@NgModule({
  declarations: [DashboardComponent],
  imports: [SharedModule, DashboardRoutingModule,MaterialModule]
})
export class DashboardModule {}
