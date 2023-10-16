import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { pagesFeatureName } from './pages.state';
import { pagesReducer } from './core/pages.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PagesEffects } from './core/pages.effect';

@NgModule({
    imports: [
        StoreModule.forFeature( pagesFeatureName, pagesReducer ),
        EffectsModule.forFeature([ PagesEffects ]),
    ],
})
export class PagesStateModule { }