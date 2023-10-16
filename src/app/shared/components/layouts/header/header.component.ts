import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { AuthState } from 'src/app/store/auth/auth.state';
import { logout } from 'src/app/store/auth/core/auth.action';
import { selectName } from 'src/app/store/auth/core/auth.selector';
import { themeListActive, themeListInactive } from 'src/app/store/ui/core/ui.action';
import { selectThemeList } from 'src/app/store/ui/core/ui.selector';
import { UiState } from 'src/app/store/ui/ui.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public activeThemeList$ = this.uiStore.select( selectThemeList );
  public name$ = this.authStore.select( selectName );
  @ViewChild('themeOptions', { static: true }) themeOptions!: ElementRef;

  constructor(
    private readonly uiStore: Store<UiState>,
    private readonly authStore: Store<AuthState>,
  ) { }

  @HostListener(
    'document:keydown.escape', ['$event']
  ) onKeydownHandler(event: KeyboardEvent) {
    
    this.activeThemeList$.pipe( take(1) ).subscribe(
      ( value ) => ( value ) && this.uiStore.dispatch( 
        themeListInactive({ themeList: this.themeOptions })
      )
    );
  }

  showOptionThemes( show: boolean ): void {
    if ( show ) {
      this.uiStore.dispatch(
        themeListActive({ themeList: this.themeOptions })
      );
    } else {
      this.uiStore.dispatch( 
        themeListInactive({ themeList: this.themeOptions })
      );
    }
  }

  logout(): void {
    this.authStore.dispatch( logout() );
  }
}
