import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { counterReducer } from './redux/counter/counter.redcuer';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { cartReducer } from './redux/cart/cart.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideStore(),
  provideState({name:"counter",reducer:counterReducer}),
  provideState({name:"cart",reducer:cartReducer}),
  provideHttpClient(withFetch())
  ]
};
