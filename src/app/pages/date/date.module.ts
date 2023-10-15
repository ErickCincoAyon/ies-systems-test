import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateComponent } from './date.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: DateComponent },
    ]),
  ]
})
export class DateModule { }
