import { NgModule } from '@angular/core';
import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { AdminLayoutComponent } from './admin-layout.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from '../../../material-module'
import { ConfigService } from '../../services/config.service';

@NgModule({
  declarations: [AdminLayoutComponent],
  imports: [SharedModule,AdminLayoutRoutingModule ,MaterialModule],
  providers: [ConfigService ],
  
})
export class AdminLayoutModule {}
