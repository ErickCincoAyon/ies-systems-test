import { ElementRef, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UiActionTypes } from './ui.action';
import { AnimateService } from "src/app/shared/services/animate.service";
import { map, switchMap } from "rxjs";

@Injectable()
export class UiEffects {
    
    constructor(
        private readonly actions$: Actions,
        private readonly animateService: AnimateService,
    ) {}

    /**
     * @loader Effects
     */
    loaderActive$ = createEffect(() => 
        this.actions$.pipe(
            ofType( UiActionTypes.LOADER_ACTIVE ),
        ), { dispatch: false }
    );

    loaderInactive$ = createEffect(() => 
        this.actions$.pipe(
            ofType( UiActionTypes.LOADER_INACTIVE ),
        ), { dispatch: false }
    );

    /**
     * @sidebar Effects
     */
    sidebarActive$ = createEffect(() => 
        this.actions$.pipe(
            ofType( UiActionTypes.SIDEBAR_ACTIVE ),
            map(( action: any ) => action.sidebar ),
            map(( sidebar: ElementRef ) => {
                this.animateService.toggleAnimation(
                    sidebar.nativeElement, true,
                    'left','-250px','0px', 300,
                );
            })
        ), { dispatch: false }
    );

    sidebarInctive$ = createEffect(() => 
        this.actions$.pipe(
            ofType( UiActionTypes.SIDEBAR_INACTIVE ),
            map(( action: any ) => action.sidebar ),
            map(( sidebar: ElementRef ) => {
                this.animateService.toggleAnimation(
                    sidebar.nativeElement, false,
                    'left','-250px','0px', 300,
                );
            })
        ), { dispatch: false }
    );

    /**
     * @themeList
     */
    themeListActive$ = createEffect(() => 
        this.actions$.pipe(
            ofType( UiActionTypes.THEMELIST_ACTIVE ),
            map(( action: any ) => action.themeList ),
            map(( themeList: ElementRef ) => {

                this.animateService.toggleAnimation(
                    themeList.nativeElement, true,
                    'bottom','0px','-240px', 300,
                );
              
                this.animateService.toggleAnimation(
                    themeList.nativeElement, true,
                    'height', '0px', '240px', 300
                );
            })
        ), { dispatch: false }
    );

    themeListInactive$ = createEffect(() => 
        this.actions$.pipe(
            ofType( UiActionTypes.THEMELIST_INACTIVE ),
            map(( action: any ) => action.themeList ),
            map(( themeList: ElementRef ) => {

                this.animateService.toggleAnimation(
                    themeList.nativeElement, false,
                    'bottom','0px','-240px', 300,
                );
              
                this.animateService.toggleAnimation(
                    themeList.nativeElement, false,
                    'height', '0px', '240px', 300
                );
            })
        ), { dispatch: false }
    );


}