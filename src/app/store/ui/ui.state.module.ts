import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { uiFeatureName } from "./ui.state";
import { uiReducer } from "./core/ui.reducer";
import { UiEffects } from "./core/ui.effect";

@NgModule({
    imports: [
        StoreModule.forFeature( uiFeatureName, uiReducer ),
        EffectsModule.forFeature([ UiEffects ]),
    ],
})
export class UiStateModule {}