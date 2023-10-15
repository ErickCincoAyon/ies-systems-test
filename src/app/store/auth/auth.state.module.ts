import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { authFeatureName } from './auth.state';
import { authReducer } from './core/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './core/auth.effect';

@NgModule({
  imports: [
    StoreModule.forFeature( authFeatureName, authReducer ),
    EffectsModule.forFeature([ AuthEffects ]),
],
})
export class AuthStateModule { }
