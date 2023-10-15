import { Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-username-dialog',
  templateUrl: './username-dialog.component.html',
  styleUrls: ['./username-dialog.component.scss']
})
export class UsernameDialogComponent {

  public invalidForm: boolean = true;

  constructor(
    public readonly dialogRef: MatDialogRef<UsernameDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  modelChanged( event: string ): void {
    if ( event.length < 3 || event.length > 20 ) {
      this.invalidForm = true;
    } else {
      this.invalidForm = false;
    }
  }

}
