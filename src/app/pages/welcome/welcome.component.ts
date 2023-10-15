import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsernameDialogComponent } from './username-dialog/username-dialog.component';
import { Store } from '@ngrx/store';
import { AuthState } from 'src/app/store/auth/auth.state';
import { setName } from 'src/app/store/auth/core/auth.action';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  public name!: string;

  constructor(
    private readonly dialog: MatDialog,
    private readonly authStore: Store<AuthState>,
  ) { }

  ngOnInit(): void {
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
