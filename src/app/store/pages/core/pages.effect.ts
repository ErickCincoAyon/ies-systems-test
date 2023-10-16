import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { ToastrService } from "ngx-toastr";
import { PagesActionTypes } from "./pages.action";
import { tap, delay, map, switchMap, catchError, of } from 'rxjs';
import { loaderActive, loaderInactive } from "../../ui/core/ui.action";
import { UiState } from '../../ui/ui.state';
import { CivilStatusFormModel } from "../models/civil-status-form.model";
import { CivilStatusService } from "../services/civil-status.service";
import * as actions from './pages.action';
import { ErrorModel } from "src/app/shared/models/error.model";

@Injectable()
export class PagesEffects {

    constructor(
        private readonly actions$: Actions,
        private readonly uiStore: Store<UiState>,
        private readonly toastrService: ToastrService,
        private readonly civilStatusService: CivilStatusService,
    ) {}

    /**
     * @civilStatus
     */
    civilStatus$ = createEffect(() => 
        this.actions$.pipe(
            ofType( PagesActionTypes.CIVIL_STATUS_PAGES ),
            tap(() => {
                this.uiStore.dispatch( loaderActive() );
            }),
            delay(2000),
            map(( action: any ) => action.form ),
            switchMap(( action: CivilStatusFormModel ) => 
                this.civilStatusService.sendCivilStatus( action ).pipe(
                    map(( value ) => {

                        this.uiStore.dispatch( loaderInactive() ); 
                        this.toastrService.success('El ingreso de información ha sido exitoso !');
                        return actions.civilStatusSuccess({ res: 'El ingreso de información ha sido exitoso !' })
                    }),
                    catchError(( error: ErrorModel ) => {
                        this.uiStore.dispatch( loaderInactive() ); 
                        return of( actions.errorPages({ res: error }));
                    }),
                ),
            ),
        )
    )
    
}