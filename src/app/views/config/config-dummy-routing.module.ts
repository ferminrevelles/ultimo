import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigDummyComponent } from './config-dummy.component';

const routes: Routes = [
  {
    path: '',
    component: ConfigDummyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigDummyRoutingModule {}
