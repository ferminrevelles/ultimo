import { NgModule } from '@angular/core';

import { ConfigDummyRoutingModule } from './config-dummy-routing.module';
import { ConfigDummyComponent } from './config-dummy.component';
import { ConfigComponent} from './config.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from '../../material-module'
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { ConfigService } from '../../shared/services/config.service';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http,'./assets/i18n/','.json');
}

@NgModule({
  declarations: [ConfigDummyComponent ,ConfigComponent],
  imports: [SharedModule, ConfigDummyRoutingModule,MaterialModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })  ],
  providers: []
})
export class ConfigDummyModule {}
