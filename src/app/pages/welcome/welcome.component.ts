import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsernameDialogComponent } from './username-dialog/username-dialog.component';
import { Store } from '@ngrx/store';
import { AuthState } from 'src/app/store/auth/auth.state';
import { setName } from 'src/app/store/auth/core/auth.action';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  public name!: string;

  constructor(
    private readonly dialog: MatDialog,
    private readonly authStore: Store<AuthState>,
    private readonly title: Title,
  ) { 
    this.title.setTitle('Bienvenido a TESTCOMPANY');
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(UsernameDialogComponent, {
      data: { name: this.name },
    });

    dialogRef.afterClosed().subscribe(( value: string ) => {
      ( value && value.length > 2 ) &&
        this.authStore.dispatch( setName({ name: value }));
    });
  }
}
