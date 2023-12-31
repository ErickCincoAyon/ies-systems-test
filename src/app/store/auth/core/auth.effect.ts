import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { UiState } from "../../ui/ui.state";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthActionTypes } from "./auth.action";
import { catchError, delay, map, of, switchMap, tap } from 'rxjs';
import { LoginModel } from "../models/login.model";
import { AuthService } from "../services/auth.service";
import { ErrorModel } from "src/app/shared/models/error.model";
import * as actions from './auth.action';
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { loaderActive, loaderInactive } from "../../ui/core/ui.action";
import { UserModel } from "../models/user.model";

@Injectable()
export class AuthEffects {

    constructor(
        private readonly actions$: Actions,
        private readonly authService: AuthService,
        private readonly uiStore: Store<UiState>,
        private readonly router: Router,
        private readonly toastrService: ToastrService,
    ) {}

    /**
     * @login 
     */
    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType( AuthActionTypes.LOGIN_AUTH ),
            tap(() => {
                this.uiStore.dispatch( loaderActive() ); 
            }),
            delay(2000),
            map(( action: any ) => action.form ),
            switchMap(( action: LoginModel ) =>
                this.authService.login( action ).pipe(
                    map(( user ) => {
                        
                        this.rememberAndWelcome( user, action, action.remember );
                        this.uiStore.dispatch( loaderInactive() ); 
                        return actions.loginSuccess({ res: user })
                    }),
                    catchError(( error: ErrorModel ) => {
                        this.uiStore.dispatch( loaderInactive() ); 
                        return of( actions.authError({ res: error }));
                    }),
                ),
            ),
        )
    );

    /**
     * @Logout Effects
     */
        loaderActive$ = createEffect(() => 
        this.actions$.pipe(
            ofType( AuthActionTypes.LOGOUT_AUTH ),
            tap(() => {
                this.authService.logout();
                this.router.navigate(['/auth/login']);
            }),
        ), { dispatch: false }
    );

    /**
     * @setName Effects
     */
    setName$ = createEffect(() => 
        this.actions$.pipe(
            ofType( AuthActionTypes.SET_NAME_AUTH ),
        ), { dispatch: false }
    );

    /**
     * * Protected functions 
     */
    protected rememberAndWelcome(
        user: Partial<UserModel>,
        dataUser: LoginModel,
        remember: boolean,
    ): void {
        
        ( remember ) &&
            this.authService.remember( dataUser );

        this.authService.saveUser( user );
        this.toastrService.success('Bienvenido a TESTSYSTEMS');
        this.router.navigate(['/pages/welcome']);
    }
    
}