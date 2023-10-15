import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { UsernameDialogComponent } from './username-dialog/username-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    WelcomeComponent,
    UsernameDialogComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: WelcomeComponent },
    ]),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class WelcomeModule { }
