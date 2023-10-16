import { NgModule } from '@angular/core';
import { AuthStateModule } from './auth/auth.state.module';
import { UiStateModule } from './ui/ui.state.module';
import { HttpClientModule } from '@angular/common/http';
import { PagesStateModule } from './pages/pages.state.module';

@NgModule({
  imports: [
    HttpClientModule,
    AuthStateModule,
    UiStateModule,
    PagesStateModule,
  ]
})
export class AppStoreModule { }
