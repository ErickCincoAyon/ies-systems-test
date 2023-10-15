import { NgModule } from '@angular/core';
import { AuthStateModule } from './auth/auth.state.module';
import { UiStateModule } from './ui/ui.state.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule,
    AuthStateModule,
    UiStateModule,
  ]
})
export class AppStoreModule { }
