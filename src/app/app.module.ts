import { AppComponent } from './app.component';
import { CoreModule } from './core.module';
import { FakeBackendService } from './shared/inmemory-db/fake-backend.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { rootRouterConfig } from './app-routing';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ServiceWorkerModule } from '@angular/service-worker';
import { PathLocationStrategy, LocationStrategy } from '@angular/common';


@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    MatSnackBarModule,
    MatDatepickerModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(FakeBackendService, {
      dataEncapsulation: false
    }),
    RouterModule.forRoot(rootRouterConfig, { useHash: false, initialNavigation: 'enabled' }),
    CoreModule,
    CommonModule,
    NgbModule,
    SharedModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  entryComponents: [AppComponent],
  declarations: [AppComponent],
  providers: [{provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {}

