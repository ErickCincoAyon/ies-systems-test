import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Store, select } from "@ngrx/store";
import { Observable, map, take } from "rxjs";
import { AuthState } from "src/app/store/auth/auth.state";
import { selectUser } from "src/app/store/auth/core/auth.selector";
import { AuthService } from "src/app/store/auth/services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private selectUser$ = this.authStore.select( selectUser );

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService,
    private readonly authStore: Store<AuthState>,
  ) {}

  canActivate(): Observable<boolean> {

    return this.authStore.select( selectUser ).pipe( 
      map(( user ) => {
        if ( user ) {

          return true;
        } else {
    
          console.log( user );
          this.router.navigate(['/auth/login']);
          return false;
        }
      }),
    );
  }
  
}