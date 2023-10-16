import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateComponent } from './date.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData( localeEs, 'es' );

@NgModule({
  declarations: [
    DateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: DateComponent },
    ]),
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "es" },
  ]
})
export class DateModule { }
