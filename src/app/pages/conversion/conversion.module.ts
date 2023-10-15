import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversionComponent } from './conversion.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ConversionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ConversionComponent },
    ]),
  ]
})
export class ConversionModule { }
