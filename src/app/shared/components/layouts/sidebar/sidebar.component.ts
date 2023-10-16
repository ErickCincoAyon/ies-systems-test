import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { take } from 'rxjs';
import { AuthState } from 'src/app/store/auth/auth.state';
import { logout } from 'src/app/store/auth/core/auth.action';
import { selectName } from 'src/app/store/auth/core/auth.selector';
import { sidebarActive, sidebarInactive } from 'src/app/store/ui/core/ui.action';
import { selectSidebar } from 'src/app/store/ui/core/ui.selector';
import { UiState } from 'src/app/store/ui/ui.state';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  public name$ = this.authStore.select( selectName );
  public activeSidebar$ = this.uiStore.pipe( select( selectSidebar ));
  @ViewChild('sidebar', { static: true }) sidebar!: ElementRef;

  constructor(
    private readonly uiStore: Store<UiState>,
    private readonly authStore: Store<AuthState>,
  ) { }

  @HostListener('window:keydown', ['$event'])
  keydown( event: any ) {
    this.activeSidebar$.pipe(
      take(1)
    ).subscribe(
      ( value ) => ( value ) &&
        this.toggleSidebar( false ),
    );
  }

  toggleSidebar( show: boolean ): void {
    const sidebar: any = { ...this.sidebar };
    delete sidebar.nativeElement.__ngContext__;

    if ( show ) {

      this.uiStore.dispatch( sidebarActive({ sidebar }));
    } else {

      this.uiStore.dispatch( sidebarInactive({ sidebar }));
    }
  }

  logout(): void {
    this.toggleSidebar( false );
    this.authStore.dispatch( logout() );
  }

}
