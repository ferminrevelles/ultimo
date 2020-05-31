import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ForgotPasswordRoutingModule } from './forgot-password-routing.module';
import { ForgotPasswordComponent } from './forgot-password.component';
import { ForgotPasswordSmartComponent} from './forgot-password-smart.component';

@NgModule({
  declarations: [ForgotPasswordComponent,ForgotPasswordSmartComponent],
  imports: [
  //  CommonModule,
    SharedModule,
    ForgotPasswordRoutingModule
  ]
})
export class ForgotPasswordModule { }
