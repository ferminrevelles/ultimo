import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobOffersComponent } from './job-offers.component';

const routes: Routes = [
  {
    path: '',
    component: JobOffersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobOffersRoutingModule {}