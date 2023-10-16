import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, map } from "rxjs";
import { AuthState } from "src/app/store/auth/auth.state";
import { selectUser } from "src/app/store/auth/core/auth.selector";
import { AuthService } from "src/app/store/auth/services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {

  constructor(
    private readonly router: Router,
    private readonly authStore: Store<AuthState>,
  ) {}

  canActivate(): Observable<boolean> {

    return this.authStore.select( selectUser ).pipe( 
      map(( user ) => {
        if ( !user ) {

          return true;
        } else {
    
          this.router.navigate(['/pages/welcome']);
          return false;
        }
      }),
    );
  }
}