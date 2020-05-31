import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
/*
import { TranslateModule } from '@ngx-translate/core';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar'; */

// COMPONENTS
import { AppComfirmComponent } from './services/app-confirm/app-confirm.component';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { LineComponent } from './widgets/line/line.component';
import { MaterialModule } from '../material-module'
import { HighchartsChartModule } from 'highcharts-angular';
// DIRECTIVES

// PIPES

// SERVICES
import { AppConfirmService } from './services/app-confirm/app-confirm.service';

const declarations = [AppComfirmComponent, AdminLayoutComponent,LineComponent];
/*const exports = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  AppComfirmComponent,
  AdminLayoutComponent,
  LineComponent,
  MaterialModule
];*/
const providers = [AppConfirmService];

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule,MaterialModule, HighchartsChartModule],
  entryComponents: [AppComfirmComponent],
  providers,
  declarations,
  exports: [
    CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  AppComfirmComponent,
  AdminLayoutComponent,
  LineComponent,
  MaterialModule
  ]
})
export class SharedModule {}
