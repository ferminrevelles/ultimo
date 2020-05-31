import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotPasswordSmartComponent } from './forgot-password-smart.component';
const routes: Routes = [
  {
    path: '',
    component: ForgotPasswordSmartComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForgotPasswordRoutingModule { }
