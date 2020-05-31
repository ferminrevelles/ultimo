import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { UserEffects } from './shared/state/user/effects/user.effects';
import { OfferEffects } from './shared/state/offers/effects/offers.effects';
import { AuthService } from './shared/services/auth.service';
import { StoreModule } from '@ngrx/store';
import {  reducers,metaReducers  } from './shared/state/root.reducer';
import { ProfileService } from './shared/services/profile.service';
import { OffersService } from './shared/services/offers.service';
import "@angular/compiler";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { ConfigService } from './shared/services/config.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    
    StoreModule.forRoot(reducers ),
    EffectsModule.forRoot([UserEffects,OfferEffects]),
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers,{
      metaReducers,
      runtimeChecks:{
        strictStateImmutability:true,
        strictActionImmutability:true,
      }
    }),
    StoreRouterConnectingModule.forRoot({stateKey:'router'})
    
  ],
  providers: [AuthService,ProfileService,OffersService,ConfigService ],
  exports: []
})
export class CoreModule {}
