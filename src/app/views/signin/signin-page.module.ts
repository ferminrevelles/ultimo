import { NgModule } from '@angular/core';

import { SigninRoutingModule } from './signin-routing.module';
import { SigninPageComponent } from './signin-page.component';
import { SigninComponent } from './signin.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from '../../material-module'

@NgModule({
  declarations: [SigninPageComponent,SigninComponent],
  imports: [SharedModule, SigninRoutingModule,MaterialModule  ],
  providers: []
})
export class SigninPageModule {}
