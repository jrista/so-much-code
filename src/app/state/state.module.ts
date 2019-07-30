import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { appReducer } from './app.state';
import { CustomerEffects } from './customer/customer.effects';
import { OrderEffects } from './order/order.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(appReducer, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
      },
    }),
    EffectsModule.forRoot([
      CustomerEffects,
      OrderEffects
    ])
  ],
  declarations: []
})
export class StateModule { }